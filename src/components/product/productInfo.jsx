import { Col, Row } from "react-bootstrap";
import { Rating } from "../common/rating";
import { FunctionsCart } from "../../context/cartContext";

const ProductInfo = ({ product }) => {
  const { addToCart } = FunctionsCart();
  return (
    <Row className="align-items-center gap-3">
      <Col xs={12} md={8} lg={5} className="mx-auto text-center text-lg-end">
        <img src={product.img} alt={product.name} className="rounded w-100" />
      </Col>
      <Col>
        <h2 className="mb-2">{product.name}</h2>
        <p>
          <Rating ratings={product.ratings} />
        </p>
        <p className="salary mt-2 mb-2">${product.salary}</p>
        <p>
          category : <span className="category">{product.category}</span>
        </p>
        <p className="info mt-2 mb-2">{product.info}</p>
        <button
          className="main-btn mt-3"
          onClick={(e) => {
            e.preventDefault();
            addToCart(product);
          }}
        >
          Add to Cart
        </button>
      </Col>
    </Row>
  );
};

export default ProductInfo;
