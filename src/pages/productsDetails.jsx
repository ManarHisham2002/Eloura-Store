import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductInfo from "../components/product/productInfo";
import ProductReview from "../components/product/productReview";
import ProductCard from "../components/product/productCard";
import { randomProducts } from "../context/randomProducts";
import NotFound from "./notFound";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return <NotFound text={"Product"} />;
  }

  return (
    <div className="d-flex justify-content-center p-5">
      <Container className="product-details">
        <Row>
          <Col sm={12}>
            <ProductInfo product={product} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mt-5 mb-5">
            <ProductReview product={product} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} className="mt-5">
            <h3 className="mb-3">You might also like</h3>
            <Row xs={1} md={4} className="justify-content-evenly gap-4">
              {randomProducts(
                products.filter(
                  (p) => p.id !== product.id && p.category === product.category,
                ),
                3,
              ).map((item) => (
                <Col key={item.id}>
                  <ProductCard product={item} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
