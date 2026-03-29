import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  const dataService = [
    {
      title: "Free Shipping",
      info: "On all orders",
      logo: "/public/assets/icons/transport.png",
      backgroundColor: "#a74f65",
    },
    {
      title: "Secure Payment",
      info: "100% protected payments",
      logo: "/public/assets/icons/credit-card.png",
      backgroundColor: "#bd6e82",
    },
    {
      title: "Money Back Guarantee",
      info: "30 days guarantee",
      logo: "/public/assets/icons/money-back-guarantee.png",
      backgroundColor: "#8b4254",
    },
    {
      title: "Customer Support",
      info: "24/7 friendly support",
      logo: "/public/assets/icons/support.png",
      backgroundColor: "#d86783",
    },
  ];
  return (
    <div className="d-flex justify-content-center p-5">
      <Container>
        <Row className="justify-content-evenly">
          {dataService.map((service, index) => {
            return (
              <Col
                lg={3}
                sm={6}
                key={index}
                style={{
                  backgroundColor: `${service.backgroundColor}`,
                }}
                className="service-cart d-flex flex-column align-items-center p-3 mb-3"
              >
                <div className="icon d-flex justify-content-center align-items-center mb-3">
                  <img src={service.logo} alt={service.title} />
                </div>
                <h2 className="moon-dance mb-3">{service.title}</h2>
                <p>{service.info}</p>
              </Col>
            );
          })}
        </Row>
      </Container>
      </div>
  );
};
export default Services;
