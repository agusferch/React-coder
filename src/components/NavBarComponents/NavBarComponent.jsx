import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import carrito from '../../assets/carrito.png';
import CartWidget from '../CartWidget';

const NavBarComponent = () => {
    //la flecha indica que lo que pongamos dentro de las llaves se va a ejecutar (el cuerpo de la funcion)

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Abelarda</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">productos</Nav.Link>
                        <NavDropdown title="Opciones" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Nosotros</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Contacto
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Preguntas frecuentes</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Ayuda
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    )
}

export default NavBarComponent;
//vamos a exportar para que sea visible para otros componentes

