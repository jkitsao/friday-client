import React from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
function Checkout({ user }) {
  const config = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now(),
    amount: 10,
    currency: "USD",
    payment_plan: "15208",
    payment_options: "card",
    customer: { ...user },
    customizations: {
      title: "upgrade",
      description: "upgrade to the next plan",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  const handlePayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        console.log({ response });
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };
  return (
    <div>
      <button onClick={handlePayment}>Payment with React hooks</button>
      {JSON.stringify(user)}
    </div>
  );
}

export default Checkout;
