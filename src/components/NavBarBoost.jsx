import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/NavBar.css";
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

function NavBarBoost() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="md" collapseOnSelect>
      <Container>

        <Navbar.Brand as={NavLink} to="/">
          <img
            src="../logo-boca.png"
            alt="Logo"
            style={{ height: '70px' }}
          />
        </Navbar.Brand>


        <Navbar.Toggle aria-controls="basic-navbar-nav" />


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
