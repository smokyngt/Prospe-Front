// import React, { useState, useEffect } from 'react'
// // import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
// import { useLocation } from 'react-router-dom'
// // import useAuthStore from '../../store/auth.store'

// const Payment: React.FC = () => {
// //   const { user } = useAuthStore()
//   const location = useLocation()
//   const [clientSecret, setClientSecret] = useState(null)
//   const [successMessage, setSuccessMessage] = useState('')
//   const [errorMessage, setErrorMessage] = useState('')
//   const [isLoading, setIsLoading] = useState(false)
// //   const stripe = useStripe()
// //   const elements = useElements()
//   useEffect(() => {
//     if (location.state && location.state.clientSecret) {
//       setClientSecret(location.state.clientSecret)
//     } else return window.location.replace('/')
//   }, [location.state])
//   const handleSubmit = async (e: any) => {
//     e.preventDefault()
//     setIsLoading(true)
//     const cardElement = elements.getElement(CardElement)
//     const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//       payment_method: {
//         card: cardElement,
//         billing_details: {
//           name: user.name
//         }
//       }
//     })
//     if (error) {
//       setErrorMessage(error.message)
//     } else {
//       switch (paymentIntent.status) {
//         case 'succeeded':
//           setSuccessMessage('Payment succeeded!')
//           setTimeout(() => { window.location.replace('/user/dashboard') }, 2000)
//           break
//         case 'processing':
//           setErrorMessage('Your payment is processing.')
//           break
//         case 'requires_payment_method':
//           setErrorMessage('Your payment was not successful. Please try another payment method.')
//           break
//         default:
//           setErrorMessage('Something went wrong.')
//           break
//       }
//     }
//     setIsLoading(false)
//   }
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="max-w-lg w-full mx-auto px-8 py-6 bg-white shadow-md rounded-lg">
//         <h1 className="text-3xl font-bold mb-4 text-center">Payment</h1>
//         {clientSecret
//           ? (
//             <form onSubmit={handleSubmit}>
//               <CardElement />
//               <button disabled={isLoading}>{isLoading ? 'Processing...' : 'Pay'}</button>
//               {successMessage && (
//                 <div className="px-4 py-3 mb-4 rounded bg-green-100 text-green-700">
//                   {successMessage}
//                 </div>
//               )}
//               {errorMessage && (
//                 <div className="px-4 py-3 mb-4 rounded bg-red-100 text-red-700">
//                   {errorMessage}
//                 </div>
//               )}
//             </form>
//             )
//           : (
//             <p>No client secret provided for payment.</p>
//             )}
//       </div>
//     </div>
//   )
// }
// export default Payment