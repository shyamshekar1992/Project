import React, { Component } from "react";
import { Navbar, Nav, Button, NavDropdown } from "react-bootstrap";

export class navbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">View Vehicles</Nav.Link>
          </Nav>
          <Nav>
            
            <Nav.Link eventKey={2} href="#memes">
              <button
                class="btn btn-outline-secondary "
                type="button"
                style={{ borderRadius: "4rem" }}
              >
                Sign In
              </button>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <button
                class="btn btn-outline-secondary "
                type="button"
                style={{ borderRadius: "4rem" }}
              >
                Sign Out
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default navbar;
