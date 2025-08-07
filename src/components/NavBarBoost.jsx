import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../css/NavBar.css";
import CartWidget from './CartWidget';

function NavBarBoost() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand href="#home"><img src='../logo-boca.png' alt='Logo' /></Navbar.Brand>

          <Nav className="ms-auto">
            <Nav.Link href="#nuevo">NUEVO</Nav.Link>
            <Nav.Link href="#futbol">FUTBOL</Nav.Link>
            <Nav.Link href="#basquet">BASQUET</Nav.Link>
            <Nav.Link href="#basquet">ACCESORIOS</Nav.Link>
          </Nav>

          <CartWidget/>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBarBoost;
