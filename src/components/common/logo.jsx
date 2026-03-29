import Navbar from "react-bootstrap/Navbar";
const Logo = () => {
  return (
      <Navbar.Brand
        href="/"
        className="logo d-flex align-items-end justify-content-start gap-2"
      >
        <img alt="eloura-logo" src="/assets/icons/eloura-logo.png" />
        <h1 className="moon-dance">Eloura</h1>
      </Navbar.Brand>
  );
};
export default Logo;
