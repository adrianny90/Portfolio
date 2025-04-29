import CartProducts from "./CartProducts";
import { useOutletContext } from "react-router";
import Payment from "../components/Payment";
const Cart = () => {
  const { cart, setCart } = useOutletContext();
  if (!cart.length)
    return (
      <div className="text-center text-black mt-5">
        <p>Basket is empty</p>
      </div>
    );
  return (
    <>
      <h1 className="text-4xl font-bold m-5 text-black text-center">
        Products in your cart
      </h1>
      <CartProducts shop={cart} setShop={setCart} />
      <Payment shop={cart} setShop={setCart} />
    </>
  );
};

export default Cart;
