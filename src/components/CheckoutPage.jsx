import { CardElement, useElements, useStripe, Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { checkOut } from "../Api-Adapter";

const PUBLIC_KEY =
  "pk_test_51MtsydIGbpUzCRMIyl91749azbcWLZi8pNyIcBfcTlYnO6MfPEuxrwfjmcXBqIHccsbvCW2HPsW1rs07QwiaMtkD00oIiY7ppP";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function CheckoutPage(props) {
  const {cart} = props
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    function orderTotal() {
      let subtotal = 0;
      if (cart.cartItems) {
        cart.cartItems.forEach((item) => {
          subtotal += item.price * item.quantity;
        });
      }
      return subtotal;
    }

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:8080/api/payment", {
          amount: orderTotal(),
          id,
        });
        console.log("hit");

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (

    <>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement />
            </div>
          </fieldset>
          <button>Pay</button>
        </form>
      ) : (
        <div>
          <h2>Purchase confirmed</h2>
        </div>
      )}
    </>
  );
}
