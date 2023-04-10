import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutPage from "./CheckoutPage";

const PUBLIC_KEY =
  "pk_test_51MtsydIGbpUzCRMIyl91749azbcWLZi8pNyIcBfcTlYnO6MfPEuxrwfjmcXBqIHccsbvCW2HPsW1rs07QwiaMtkD00oIiY7ppP";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer({ token, cart, setCart }) {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutPage token={token} cart={cart} setCart={setCart} />
    </Elements>
  );
}
