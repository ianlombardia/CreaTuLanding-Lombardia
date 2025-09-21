import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import '../css/navbarb.css';

function NavBarBoost() {
  return (
    <Navbar className="custom-navbar" expand="md" collapseOnSelect>
      <Container>

        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/logo-boca.png"
            alt="Logo"
            style={{ height: '70px' }}
          />
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />


        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-3">
            <Nav.Link as={NavLink} to="/">NUEVO</Nav.Link>
            <Nav.Link as={NavLink} to="/categories/futbol">FÚTBOL</Nav.Link>
            <Nav.Link as={NavLink} to="/categories/basquet">BÁSQUET</Nav.Link>
            <Nav.Link as={NavLink} to="/categories/accesorios">ACCESORIOS</Nav.Link>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBoost;
