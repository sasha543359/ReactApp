import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import s from "./Navbar.module.css";

const Header = function (props) {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home" className={s.padding}>
          SiteName
        </Navbar.Brand>

        <Nav className="me-auto"></Nav>
        <Nav>
          <Nav.Link href="#deets">SignIn</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            LogOut
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Header;
