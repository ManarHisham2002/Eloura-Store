import { FunctionsCart } from "../../context/cartContext"; 
const CartSummary = () => {
  const { totalPrice } = FunctionsCart();
  return (
    <div className="summary rounded p-3">
      <h2 className="moon-dance fs-2">cart summary</h2>
      <p className="mt-3 ps-2 fs-5">
        Total: <span className="total-price">${totalPrice}</span>
      </p>
    </div>
  );
};
export default CartSummary;
