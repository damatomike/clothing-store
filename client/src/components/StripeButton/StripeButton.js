import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_swgZVNKN4tyqgBXKrWl8R5HW000gFy8jra';

  const onToken = async (token) => {
    try {
      await axios({
        url: 'payment',
        method: 'post',
        data: {
          amount: priceForStripe,
          token,
        },
      });
      alert('Payment successful!');
    } catch (error) {
      console.error('Payment error: ', error);
      alert('There was an issue with your payment.');
    }
    // axios({
    //   url: 'payment',
    //   method: 'post',
    //   data: {
    //     amount: priceForStripe,
    //     token,
    //   },
    // })
    //   .then((res) => {
    //     alert('Payment successful');
    //   })
    //   .catch((error) => {
    //     console.error('Payment error: ', JSON.parse(error));
    //     alert('There was an issue with your payment.');
    //   });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRSP Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
