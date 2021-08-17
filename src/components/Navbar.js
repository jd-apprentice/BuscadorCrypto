import { Container } from "react-bootstrap";
import {
  Navbar,
  Nav,
  NavDropdown,
  NavDropdownItem,
  NavLink,
} from "react-bootstrap";
import { FormControl } from "react-bootstrap";

const BarraNav = () => {
  return (
    <Navbar className="my-3" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h1 className="fs-3 mt-2">Buscador de Cryptomonedas</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Utilidad" id="basic-nav-dropdown">
              <NavDropdown.Item
                target="_blank"
                href="https://www.coinlore.com/all_coins"
              >
                Todas las monedas
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://www.coinlore.com/cryptocurrency-data-api"
              >
                Coinlore API
              </NavDropdown.Item>
              <NavDropdown.Item
                target="_blank"
                href="https://github.com/jd-apprentice/BuscadorCrypto"
              >
                Repositorio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <FormControl
          className="ms-3 w-50"
          placeholder="Busca tu moneda en la base de datos"
        />
      </Container>
    </Navbar>
  );
};

export default BarraNav;
