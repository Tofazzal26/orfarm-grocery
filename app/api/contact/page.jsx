import ContactCard from "./ContactCard";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      image: "/contact1.png",
      title: "Email Address",
      infoOne: "afranislamabir6789@gmail.com",
      infoTwo: "mdtofazzalislam6789@gmail.com",
    },
    {
      id: 2,
      image: "/contact2.png",
      title: "Phone Number",
      infoOne: "+8801306700357",
      infoTwo: "+8801931342951",
    },
    {
      id: 3,
      image: "/contact3.png",
      title: "Office Address",
      infoOne: "Dhaka, Tongi-Gazipur",
      infoTwo: "Dhaka, BANGLADESH",
    },
  ];

  return (
    <div className="my-[20px] md:my-[100px]">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-8">
          {contactInfo.map((item) => (
            <ContactCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
