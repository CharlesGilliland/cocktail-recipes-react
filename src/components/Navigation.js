import React from "react";
import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar className="navbarStyle" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="/">Nice Cocktail</Navbar.Brand>

        <Nav className="me-auto">
          <NavDropdown title="View">
            <NavLink href="/cocktails"><span className="darkText">Cocktails</span></NavLink>
            <NavDropdown.Divider/>
            <NavLink href="/equipment"><span className="darkText">Equipment</span></NavLink>
            <NavLink href="/ingredients"><span className="darkText">Ingredients</span></NavLink>
            <NavLink href="/garnish"><span className="darkText">Garnish</span></NavLink>
            <NavLink href="/glasses"><span className="darkText">Glass</span></NavLink>
          </NavDropdown>
          <NavDropdown title="Create">
            <NavLink href="/createCocktail"><span className="darkText">Cocktails</span></NavLink>
            <NavDropdown.Divider/>
            <NavLink href="/createEquipment"><span className="darkText">Equipment</span></NavLink>
            <NavLink href="/createIngredient"><span className="darkText">Ingredients</span></NavLink>
            <NavLink href="/createGarnish"><span className="darkText">Garnish</span></NavLink>
            <NavLink href="/createGlass"><span className="darkText">Glass</span></NavLink>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
