"use client";
import CheckoutForm from "@/app/dashboard/UserProduct/CheckoutForm/page";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_API_KEY);
const CheckoutFormWrapper = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default CheckoutFormWrapper;
