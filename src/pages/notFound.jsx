import { Container } from "react-bootstrap";
const NotFound = ({ text }) => {
  return (
    <div className="d-flex justify-content-center p-5">
      <Container>
      <div className="content">
        <div className="paragraph">
          <p>oops...</p>
          <p className="errorNum">404</p>
          <p className="smallP mb-3">{text} not found</p>
        </div>
        <img
          src="/public/assets/images/notfound.png"
          alt="not found img"
          className="mb-3"
        />
      </div>
    </Container>
    </div>
  );
};
export default NotFound;
