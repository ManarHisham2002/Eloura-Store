import { Col, Container, Row } from "react-bootstrap";

const Team = () => {
  const dataTeam = [
    {
      objTitle: "Content Creator",
      img: "/public/assets/images/about/team/ContentCreator.png",
    },
    {
      objTitle: "Creative Designer",
      img: "/public/assets/images/about/team/CreativeDesigner.png",
    },
    {
      objTitle: "Customer Experience",
      img: "/public/assets/images/about/team/CustomerExperience .png",
    },
  ];
  return (
    <div className="our-team d-flex justify-content-center p-5">
      <Container className="d-flex flex-column align-items-center">
        <div className="title p-2 mb-5">
          <h1 className="moon-dance">Our Team</h1>
          <div className="progress-bar"></div>
        </div>
        <Row
          xs={1}
          md={3}
          className="align-items-center justify-content-evenly w-100 mb-5"
        >
          {dataTeam.map((item, index) => {
            return (
              <Col key={index} className="cart-team">
                <img src={item.img} alt={item.objTitle} />
                <div className="name-box p-3">{item.objTitle}</div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};
export default Team;
