import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FunctionsCart } from "../../context/cartContext";
const CartItem = ({ item }) => {
  const { addToCart, decreaseQty, removeItem } = FunctionsCart();
  return (
    <div className="item d-flex flex-column flex-lg-row align-items-center position-relative gap-3 rounded p-4 m-1">
      <div className="left-section">
        <img
          src={item.img}
          alt={item.name}
          className="product-img rounded p-2"
        />
        <div className="text-center">
          <FaPlus
            className="icon icon-plus me-2 ms-2"
            onClick={() => addToCart(item)}
          />
          <FaMinus
            className="icon icon-mins me-2 ms-2"
            onClick={() => decreaseQty(item.id)}
          />
        </div>
      </div>
      <div className="right-section">
        <h3 className="product-name mb-3">{item.name}</h3>
        <p className="product-price mb-3">
          ${item.salary} * <span className="count">{item.quantity}</span>
        </p>
        <p className="total-price">${item.salary * item.quantity}</p>
      </div>
      <FaXmark
        className="icon position-absolute top-0 end-0 m-3"
        onClick={() => removeItem(item.id)}
      />
    </div>
  );
};
export default CartItem;
