import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import { createOrder, createUserPayment } from "../Api-Adapter";

export default function CheckoutPage(props) {
  const { cart, token, setCart } = props;
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
        const userPayment = await createUserPayment(
          paymentMethod.card.brand,
          "WellsFargo",
          paymentMethod.card.last4,
          `${paymentMethod.card.exp_year}-${paymentMethod.card.exp_month}-01`,
          token
        );
        await createOrder(userPayment.id, token);
        setCart({});
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:8080/api/payment", {
          amount: orderTotal() * 100,
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
          <div className="ccWrapper">
            <fieldset className="FormGroup">
              <img className="logoFoot" src="/nileLogo.png" alt="" />
              <div className="FormRow">
                <CardElement />
              </div>
              <button>Pay</button>
            </fieldset>
          </div>
        </form>
      ) : (
        <div className="confirmPayment">
          <div className="confirmPayCard">
            <h2>Purchase confirmed,</h2>
            <br></br>
            <h2>Thank You.</h2>
          </div>
          <img className="logoConfirmPay" src="/nileLogo.png" alt="" />
        </div>
      )}
    </>
  );
}
