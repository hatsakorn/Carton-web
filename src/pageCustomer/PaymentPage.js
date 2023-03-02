import { useState, useEffect } from "react";
import Script from "react-load-script";
import axios from "axios";

let OmiseCard;
export default function PaymentPage() {
  const handleLoadScript = () => {
    OmiseCard = window.OmiseCard;
    OmiseCard.configure({
      publicKey: process.env.REACT_APP_OMISE_PUBLIC_KEY,
      currency: "THB",
      frameLabel: "Borntodev Shop",
      submitLabel: "Pay NOW",
      buttonLabel: "Pay with Omise"
    });
  };

  const creditCardConfigure = () => {
    OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: []
    });
    OmiseCard.configureButton("#credit-card");
    OmiseCard.attach();
  };
  const omiseCardHandler = () => {
    OmiseCard.open({
      amount: "10000",
      onCreateTokenSuccess: (token) => {
        axios.post("/invoice/omise", {
          email: "borntodev@gmail.com",
          name: "Borntodev",
          amount: "10000",
          token: token,
          headers: {
            "Content-Type": "application/json"
          }
        });
      },
      onFormClosed: () => {}
    });
  };
  const handleClick = (e) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandler();
  };
  return (
    <div>
      <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
      <form>
        <div id="credit-card" type="button" onClick={handleClick}>
          ชำระเงินด้วยบัตรเครดิต
        </div>
      </form>
    </div>
  );
}
