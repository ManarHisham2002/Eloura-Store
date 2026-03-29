import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../common/logo";
import NavLinks from "../common/nav";

function Header() {
  return (
    <Navbar expand="lg" className="header justify-content-center p-3">
      <Container>
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLinks />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;
