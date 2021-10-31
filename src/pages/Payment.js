import React from "react";
import Checkout from "../components/payment/Checkout";
// import { useUser } from "./firebase/useUser";
import { useUser } from "../firebase/useUser";

function Payment() {
  const { user } = useUser();

  return <Checkout user={user} />;
}

export default Payment;
