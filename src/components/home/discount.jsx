import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../product/productCard";
import products from "../../data/products";
import { randomProducts } from "../../context/randomProducts";
const Discount = () => {
  return (
    <div className="d-flex justify-content-center discount p-5">
      <Container>
        <h1 className="mb-5">big discount</h1>
        <Row xs={1} md={4} className="justify-content-evenly gap-4">
          {randomProducts(products, 9).map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} off />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Discount;
