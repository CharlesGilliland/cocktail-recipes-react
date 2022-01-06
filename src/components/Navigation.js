import React from "react";
import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar className="navbarStyle" fixed="top">
      <Container>
        <Navbar.Brand>Nice Cocktail</Navbar.Brand>

        <Nav className="me-auto">
          <NavDropdown title="View">
            <NavLink href="/">Cocktails</NavLink>
            <NavDropdown.Divider/>
            <NavLink href="/equipment">Equipment</NavLink>
            <NavLink href="/ingredients">Ingredients</NavLink>
            <NavLink href="/garnish">Garnish</NavLink>
            <NavLink href="/glasses">Glass</NavLink>
          </NavDropdown>
          <NavDropdown title="Create">
            <NavLink href="/createCocktail">Cocktails</NavLink>
            <NavDropdown.Divider/>
            <NavLink href="/createEquipment">Equipment</NavLink>
            <NavLink href="/createIngredient">Ingredients</NavLink>
            <NavLink href="/createGarnish">Garnish</NavLink>
            <NavLink href="/createGlass">Glass</NavLink>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
