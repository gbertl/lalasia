import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Badge from 'react-bootstrap/Badge';

import logo from '../../assets/images/icons/logo.svg';
import bag from '../../assets/images/icons/bag.svg';
import user from '../../assets/images/icons/user.svg';

import './style.scss';

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
            <OverlayTrigger
              placement="bottom"
              overlay={<Tooltip id="tooltip-example">No items in cart</Tooltip>}
            >
              <Nav.Link className="position-relative">
                <Image src={bag} />
                <Badge className="rounded-circle position-absolute start-100 translate-middle">
                  0
                </Badge>
              </Nav.Link>
            </OverlayTrigger>
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
