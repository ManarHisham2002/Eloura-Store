import { Col, Container, Row } from "react-bootstrap";
import { FunctionsCart } from "../context/cartContext";
import CartSummary from "../components/cart/cartSummary";
import CartItem from "../components/cart/cartItem";
const Cart = () => {
  const { cartItems } = FunctionsCart();
  return (
    <div className="d-flex justify-content-center p-5">
      <Container>
        <Row>
          <Col sm={12} md={8}>
            <Row xs={1} md={2}>
              {cartItems.map((item) => (
                <Col key={item.id}>
                  <CartItem item={item} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col sm={12} md={4} className="p-3">
            <CartSummary />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Cart;
