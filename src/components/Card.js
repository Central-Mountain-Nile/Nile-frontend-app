import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

const Card = () => {
  return (
    <>
      <label htmlFor="card-element">Card</label>
      <CardElement />

      <form id="payment-form">
        <button>Pay</button>
      </form>
    </>
  );
};
export default Card;
