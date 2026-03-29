import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

export const FunctionsCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [modalData, setModalData] = useState(null);
  const hideModal = () => setModalData(null);

  const showModal = (message) => {
    setModalData(message);
    setTimeout(() => setModalData(null), 3000);
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        showModal(`${product.name} quantity increased`);
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        showModal(`${product.name} added to cart`);
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const decreaseQty = (id) => {
    setCartItems((prev) => {
      const item = prev.find((i) => i.id === id);
      if (!item) return prev;

      showModal(`${item.name} quantity decreased`);

      return prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0);
    });
  };

  const removeItem = (id) => {
    const item = cartItems.find((i) => i.id === id);
    if (item) showModal(`${item.name} removed from cart`);

    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.salary * item.quantity,
    0,
  );

  const totalCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        decreaseQty,
        removeItem,
        totalPrice,
        totalCount,
        modalData,
        hideModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
