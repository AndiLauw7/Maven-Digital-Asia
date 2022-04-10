import React from "react";
import {
  Navbar,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Button,
  Container,
} from "react-bootstrap";
import Logo from "../assets/navbar.png";
import { MdSearch } from "react-icons/md";
import "../Style.css";
export const NavHome = () => {
  return (
    <Navbar
      className="navbar"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="" style={{ width: "50px", height: "50px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">MOVIES</Nav.Link>
            <Nav.Link href="#deets">SERIES</Nav.Link>
            <Nav.Link href="#deets">CATEGORIES</Nav.Link>
            <Nav.Link href="#deets">WATCHLIST</Nav.Link>
            <Nav.Link href="#deets">MY ACCOUNT</Nav.Link>
            <Nav.Link href="#deets">
              <MdSearch />{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
