import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import logo from '../assets/images/icons/logo.svg';
import bag from '../assets/images/icons/bag.svg';
import user from '../assets/images/icons/user.svg';

const Header = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Product</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">Article</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>

          <Nav className="ms-auto flex-row gap-3">
            <Nav.Link>
              <img src={bag} alt="" />
            </Nav.Link>
            <Nav.Link>
              <img src={user} alt="" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
