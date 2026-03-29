import { Col, Container, Row } from "react-bootstrap";

const Story = () => {
  const dataStory = [
    {
      title: "Our Beginning",
      paragraph:
        "Eloura started with a simple passion for creating handmade pieces that carry real meaning. What began as small crochet creations made with love quickly turned into something bigger.We wanted every piece to tell a story, not just be a product.",
      img: "/public/assets/images/about/story/img-1.jpg",
      class: "align-items-center",
    },
    {
      title: "What We Create?",
      paragraph:
        "At Eloura, we specialize in unique handmade gifts, from delicate crochet designs to elegant bridal trays and accessories. Every item is carefully crafted to add a special touch to your most important moments, whether it's a wedding, a celebration, or a heartfelt gift.",
      img: "/public/assets/images/about/story/img-2.jpg",
      class: "align-items-center flex-row-reverse",
    },
    {
      title: "Our Promise",
      paragraph:
        "We believe that details make all the difference. That's why we focus on quality, creativity, and love in every piece we create. Our goal is to make your moments more beautiful and unforgettable with designs that feel truly personal.",
      img: "/public/assets/images/about/story/img-3.jpg",
      class: "align-items-center",
    },
  ];
  return (
    <div className="our-story d-flex justify-content-center p-5">
      <Container className="d-flex flex-column align-items-center">
        <div className="title p-2 mb-5">
          <h1 className="moon-dance">Our Story</h1>
          <div className="progress-bar"></div>
        </div>
        {dataStory.map((info, index) => {
          return (
            <Row key={index} className={info.class}>
              <Col xs={6} md={7}>
                <h2 className="mb-3 fs-1">{info.title}</h2>
                <p>{info.paragraph}</p>
              </Col>
              <Col
                xs={6}
                md={4}
                className="d-flex justify-content-center align-items-center"
              >
                <div className="pentagon">
                  <img src={info.img} alt={info.title} />
                </div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};
export default Story;
