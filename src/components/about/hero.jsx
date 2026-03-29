import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero d-flex justify-content-center p-5">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <p className="mb-5">
          Discover unique handmade creations designed with love to make your
          special moments even more beautiful. At Eloura, we believe that every
          detail matters, which is why each piece is carefully crafted to
          reflect elegance, warmth, and a personal touch. From delicate crochet
          designs to thoughtfully curated gifts, our collections are made to
          celebrate life's most meaningful occasions. Whether you are preparing
          for a special event or looking for a heartfelt gift, we create pieces
          that turn simple moments into lasting memories.
        </p>
        <Link
          to={`/`}
          style={{ textDecoration: "none" }}
          className="main-btn p-4"
        >
          view website
        </Link>
      </Container>
    </div>
  );
};
export default Hero;
