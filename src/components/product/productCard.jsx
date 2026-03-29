import { FaPlus } from "react-icons/fa";
import { Rating } from "../common/rating";
import { Link } from "react-router-dom";
import { FunctionsCart } from "../../context/cartContext";
import Card from "react-bootstrap/Card";
const ProductCard = ({ product, off }) => {
  const { addToCart } = FunctionsCart();
  return (
    <Link
      to={`/products/${product.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <Card key={product.id} className="p-4 shadow">
        {off && <p className="offer">{product.offer}% off</p>}
        <Card.Img
          variant="top"
          src={product.img}
          alt={product.name}
          className="p-2"
        />
        <Card.Body>
          <Card.Title className="mt-3 mb-3">{product.name}</Card.Title>
          <p className="mb-3">
            <Rating ratings={product.ratings} />
          </p>
          <div className="d-flex justify-content-between mb-2">
            <p>${product.salary}</p>
            <FaPlus
              className="icon-plus"
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
            />
          </div>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default ProductCard;
