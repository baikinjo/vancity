import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_wMweGbmRJj3FuHSKczosIAVk0020qQ3Lw9'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(res => {
        alert('Payment Successful')
      })
      .catch(error => {
        console.log('Pyament error: ', JSON.parse(error))
        alert(
          'There was an issue with your payment. Please make sure to use provided credit card information'
        )
      })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='Vancity'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
