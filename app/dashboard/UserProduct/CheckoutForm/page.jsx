import { AuthProduct } from "@/app/Services/ProductProvider/ProductProvider";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const session = useSession();
  const { totalPrice } = useContext(AuthProduct);
  const [clientSecret, setClientSecret] = useState("");
  const [errorMessage, setErrorMessage] = useState();
  const [transactionId, setTransactionId] = useState("");
  const [allUserProduct, setAllUserProduct] = useState([]);
  const stripe = useStripe();
  const elements = useElements();
  const route = useRouter();

  const price = totalPrice.reduce(
    (before, after) => parseInt(before) + parseInt(after.price),
    0
  );

  useEffect(() => {
    const payment = async () => {
      try {
        if (allUserProduct.length === 0) {
          console.log("Cart is now empty");
        }
        const resp = await axios.post(
          `http://localhost:3000/api/create-payment-intent`,
          { price }
        );
        console.log(resp?.data?.clientSecret);
        setClientSecret(resp?.data?.clientSecret);
      } catch (error) {
        console.error("Payment creation error:", error);
      }
    };

    const product = JSON.parse(localStorage.getItem("carts"));
    setAllUserProduct(product);

    payment();
  }, [price, setAllUserProduct]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setErrorMessage(error.message);
    } else {
      console.log("Payment Method", paymentMethod);
      setErrorMessage("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: session?.data?.user?.email || "anonymous",
            name: session?.data?.user?.name || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm error");
    } else {
      // console.log("Payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        // console.log("transaction id", paymentIntent.id);
        setTransactionId(paymentIntent.id);

        const payment = {
          email: session?.data?.user?.email,
          price: price,
          transaction: paymentIntent.id,
          date: new Date(),
          status: "pending",
        };
        const vendorData = allUserProduct.map((item) => ({
          ...item,
          userEmail: session?.data?.user?.email,
          price: price,
          transaction: paymentIntent.id,
          status: "pending",
        }));

        // console.log(allUserProduct);
        // console.log(vendorData);
        const reps = await axios.post(
          `http://localhost:3000/api/UserPayments`,
          payment
        );

        const rep = await axios.post(
          `http://localhost:3000/api/VendorPaymentRush`,
          vendorData
        );
        // console.log(rep?.data);

         // console.log(payment);
         // console.log(reps.data?.success);
        if (reps.data?.success) {
          localStorage.removeItem("carts");
          setAllUserProduct([]);
          route.push("/api/shop");
          toast.success(
            `Your payment is done. Your Transaction is ${paymentIntent.id}`
          );
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="text-right mt-4">
        <button
          type="submit"
          className="bg-blue-600 px-3 text-[15px] py-[6px] text-white rounded-md"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
        <p className="text-red-600 font-semibold">{errorMessage}</p>
        {transactionId && (
          <p className="text-green-600 font-semibold">
            Your transaction id:{transactionId}
          </p>
        )}
      </div>
    </form>
  );
};

export default CheckoutForm;
