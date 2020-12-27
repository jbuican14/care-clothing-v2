import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51I30ruGW9PCT73UqunNNYQe3q6ged9n0Q5I71SA4EdnZeMA58TJTqdbQaseVaY9u6hTuVgSK5mrZ3FRzIH6N3l2Q00cpRg4vsc';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Test Successful');
  };

  return (
    <StripeCheckout
      currency="GBP"
      label="Pay Now"
      name=" Care Clothing Ltd. (sample site)"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is £ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
