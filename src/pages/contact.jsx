import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Input from "../components/common/input";

const Contact = () => {
  return (
    <div className="contact d-flex justify-content-center p-5 pt-2">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <h1 className="moon-dance mb-3">Contact Us</h1>
        <Row className="main justify-content-between rounded-5">
          <Col xs={12} md={6} className="p-5">
            <h2 className="mb-5">get in touch with us</h2>
            <Form>
              <Row className="justify-content-between">
                <Col xs={12} md={5}>
                  <Input
                    label="name"
                    type="text"
                    placeholder="full name"
                  />
                </Col>
                <Col xs={12} md={5}>
                  <Input
                    label="email"
                    type="email"
                    placeholder="email"
                  />
                </Col>
              </Row>
              <Input
                label="subject"
                type="text"
                placeholder="subject"
              />
              <Form.Group className="mb-4" controlId="message">
                <Form.Label className="fw-semibold text-uppercase">
                  message
                </Form.Label>
                <Form.Control
                  as="textarea"
                  aria-label="With textarea"
                  placeholder="message"
                  className="p-3 mt-3 shadow border-0"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="main-btn mt-2">
                Submit
              </Button>
            </Form>
          </Col>
          <Col xs={12} md={5}>
            <img
              src="/public/assets/images/contact.png"
              alt="contact"
              className="w-100 d-none d-md-block"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
