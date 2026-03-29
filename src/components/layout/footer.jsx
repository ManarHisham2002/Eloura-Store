import { Col, Container, Row } from "react-bootstrap";
import Logo from "../common/logo";

const Footer = () => {
    const footerSections = [
      {
        title: "about us",
        items: [
          "Handcrafted with love in Egypt",
          "Unique handmade gifts & decor",
          "Sustainable & eco-friendly materials",
          "Made to order with attention to detail",
        ],
      },
      {
        title: "customer care",
        items: [
          "How to order",
          "Shipping & delivery",
          "Returns & exchanges",
          "Custom orders",
          "Care instructions",
        ],
      },
      {
        title: "contact us",
        items: [
          "Cairo, Egypt",
          "WhatsApp: +20 10 1234 5678",
          "Instagram: @eloura.handmade",
        ],
      },
    ];

  return (
    <div className="footer d-flex justify-content-center pb-5 pt-5 mb-0">
      <Container>
        <Row>
          <Col lg={3} sm={6} className="pe-3 ps-3">
            <div className="title mb-3">
              <Logo />
            </div>
            <div className="content ps-4">
              <p>
                We create a smooth and secure shopping experience, offering
                thoughtfully selected products made with care, quality, and
                attention to detail.
              </p>
            </div>
          </Col>
          {footerSections.map((section, index) => (
            <Col key={index} lg={3} sm={6} className="pe-3 ps-3">
              <div className="title mb-3">
                <h1 className="moon-dance">{section.title}</h1>
              </div>

              <div className="content ps-4">
                <ul className="gap-2">
                  {section.items.map((item, index) => (
                    <li key={index} className="mb-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
export default Footer;
