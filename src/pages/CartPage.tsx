import { Link } from "react-router-dom"

const CartPage = () => {
  return (
    <div className="max-w-[90dvw] mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">Empty Cart</h1>
      <Link to={'/products'} className="block text-center underline">Continue Shopping</Link>
    </div>
  )
}

export default CartPage
