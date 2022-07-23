import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

import logo from '../assets/images/icons/logo.svg';
import bag from '../assets/images/icons/bag.svg';
import user from '../assets/images/icons/user.svg';

const Header = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="#home">
          <Image src={logo} className="w-lg-auto" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="mt-4 mt-md-0">
          <Nav className="ms-auto mb-2 mb-md-0">
            <Nav.Link href="#home">Product</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">Article</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
          </Nav>

          <Nav className="ms-auto flex-row gap-3">
            <Nav.Link>
              <Image src={bag} />
            </Nav.Link>
            <Nav.Link>
              <Image src={user} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
