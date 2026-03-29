import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../product/productCard";
import products from "../../data/products";
import { randomProducts } from "../../context/randomProducts";
const Sale = () => {
  return (
    <div className="sale d-flex justify-content-center p-5">
      <Container>
        <h1 className="mb-5">best sales</h1>
        <Row xs={1} md={4} className="justify-content-evenly gap-4">
          {randomProducts(products, 8).map((product) => (
            <Col key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Sale;
