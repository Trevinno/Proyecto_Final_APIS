import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import firebase from "firebase";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import "../css/positions.css";

const NavbarCo = ({ history, profile }) => {
  const navCollapsed = true;
  console.log(profile);
  const website = "http://localhost:3000"
  // href="http://localhost:3000/homepage"
  return (
    <React.Fragment>
      <Navbar className="mb-5" bg="light" expand="lg">
        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/homepage" className="mr-3">
          <img
            alt="Logo ml-3"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            width="2%"
            height="2%"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">

            <Nav.Link className="mr-3">
              <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/homepage">
              Pagina Inicial
            </Link>
            </Nav.Link>
            
            <Nav.Link className="mr-3">
            <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to="/categorias" >
              Categorias
            </Link>
            </Nav.Link>
            
            <NavDropdown
              title="Cuenta"
              className="mr-5"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item>
              <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/profile" >
              Perfil
              </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to={"/portfolio/" + profile.userID} >
              Portafolio
              </Link>
              </NavDropdown.Item>

              <NavDropdown.Divider />
              {profile.isEmpty ? (
                <NavDropdown.Item>
                <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="sign_in" >
                Iniciar Sesion
                </Link>
                </NavDropdown.Item>
              ) : (
                <NavDropdown.Item
                  onClick={() => {
                    firebase.auth().signOut();
                  }}
                >
                  Cerrar Sesion
                </NavDropdown.Item>
              )}
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
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(NavbarCo);
