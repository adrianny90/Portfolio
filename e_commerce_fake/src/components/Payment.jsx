import { clearCart } from "../utils/helpers.js";
const Payment = ({ shop, setShop }) => {
  const clearCart = () => {
    setShop([]);
  };
  const payNow = () => {
    alert(
      "You have got it  !!! \nYour paymant is being proceed, please expect delivery soon!\nThank you for your trust."
    );
    clearCart();
  };
  return (
    <div className="flex justify-center gap-10 ">
      <button
        onClick={clearCart}
        className="btn btn-sm btn-warning text-warning-content rounded-3xl shadow-xl m-15"
      >
        Clear Cart
      </button>
      <button
        onClick={payNow}
        className="btn btn-xl btn-success rounded-4xl shadow-xl m-15"
      >
        Pay Now
      </button>
    </div>
  );
};
export default Payment;
