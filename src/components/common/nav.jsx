import { FunctionsCart } from "../../context/cartContext";
import Nav from "react-bootstrap/Nav";
import { FaOpencart } from "react-icons/fa";
const NavLinks = () => {
  const { totalCount } = FunctionsCart();
  const links = [
    {
      root: "/",
      name: "home",
    },
    {
      root: "/products",
      name: "products",
    },
    {
      root: "/about",
      name: "about",
    },
    {
      root: "/contact",
      name: "contact",
    },
  ];
  return (
    <Nav className="nav ms-auto gap-5">
      {links.map((link, index) => (
        <Nav.Link key={index} href={link.root}>
          {link.name}
        </Nav.Link>
      ))}
      <Nav.Link href="/cart" className="position-relative">
        <FaOpencart size={40} />
        <div className="counter">
          <p>{totalCount}</p>
        </div>
      </Nav.Link>
    </Nav>
  );
};
export default NavLinks;
