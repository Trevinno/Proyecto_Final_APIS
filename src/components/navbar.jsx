import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, Form, Button, FormControl} from 'react-bootstrap'
import "../css/positions.css"

const NavbarCo = ({history}) => {

    const navCollapsed = true;
    return ( 
    <React.Fragment>

      <Navbar className="mb-5" bg="light" expand="lg">
    <Navbar.Brand href="http://localhost:3000/homepage" className="text-dark display-3 h3">
        <img alt="Logo ml-3" src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" width="2%" height="2%"/>
        
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto text-right">
      <Nav.Link href="http://localhost:3000/homepage" className="mr-3">Pagina Inicial</Nav.Link>
      <Nav.Link href="http://localhost:3000/categorias"  className="mr-3">Categorias</Nav.Link>
      <NavDropdown title="Cuenta" className="mr-5" id="basic-nav-dropdown">
        <NavDropdown.Item href="http://localhost:3000/profile">Perfil</NavDropdown.Item>
        <NavDropdown.Item href="http://localhost:3000/portfolio">Portafolio</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="http://localhost:3000/sign_in">Iniciar Sesion</NavDropdown.Item>
        <NavDropdown.Item onClick={() => {
          console.log("Closed Session")
        }}>Cerrar Sesion</NavDropdown.Item>
        </NavDropdown>
        </Nav> 
     {/* <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>  */}
    </Navbar.Collapse>
    </Navbar> 
    </React.Fragment>
     );
}
 
export default NavbarCo;


