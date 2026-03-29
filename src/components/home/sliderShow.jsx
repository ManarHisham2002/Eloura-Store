import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import data from "../../data/offers"
import { Link } from "react-router-dom";
const Arrow = ({ onClick, direction, hide }) => {
  return (
    <div
      className={`arrow ${direction} ${hide ? "unshow" : ""}`}
      onClick={onClick}
    >
      <img src="/assets/icons/arrow-rose.png" alt="arrow" />
    </div>
  );
};
const SliderShow = () => {
  const settings = {
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <Arrow direction="next" />,
    prevArrow: <Arrow direction="prev" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          nextArrow: <Arrow direction="next" hide={true} />,
          prevArrow: <Arrow direction="prev" hide={true} />,
        },
      },
    ],
  }; 
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map((slider, index) => {
            return (
              <div
                key={index}
                className="slide p-5 d-flex justify-content-center"
              >
                <Container>
                  <Row className="align-items-center">
                    <Col lg={8} sm={12} className="pb-3">
                      <h1
                        className="mb-4"
                        style={{
                          width: "95%",
                          color: "#a74f65",
                        }}
                      >
                        {slider.title}
                      </h1>
                      <p
                        className="mb-4"
                        style={{
                          width: "80%",
                          color: "rgb(92, 92, 92)",
                        }}
                      >
                        {slider.info}
                      </p>
                      <Link
                        to={`/products`}
                        style={{ textDecoration: "none" }}
                        className="main-btn p-4"
                      >visit our collection</Link>
                    </Col>
                    <Col lg={4} sm={12} className="pb-3">
                      <img
                        src={slider.img}
                        alt={`offer in ${slider.category} catergory`}
                        className="img-fluid rounded"
                        style={{
                          width: "100%",
                          height: "400px",
                          objectFit: "cover",
                        }}
                      />
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
export default SliderShow;
