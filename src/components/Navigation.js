import React from "react";
import { Navbar, Container, Nav, NavDropdown, NavLink } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar className="navbarStyle" fixed="top" variant="dark">
      <Container>
        <Navbar.Brand href="/">Nice Cocktail</Navbar.Brand>

        <Nav className="me-auto">
          <NavDropdown id="viewNavDropdown" title="View">
            <NavLink href="/cocktails"><span className="darkText">Cocktails</span></NavLink>
            <NavDropdown.Divider/>
            <NavLink id="equipmentNav" href="/equipment"><span className="darkText">Equipment</span></NavLink>
            <NavLink id="ingredientsNav" href="/ingredients"><span className="darkText">Ingredients</span></NavLink>
            <NavLink id="garnishNav" href="/garnish"><span className="darkText">Garnish</span></NavLink>
            <NavLink id="glassNav" href="/glasses"><span className="darkText">Glass</span></NavLink>
          </NavDropdown>
          <NavDropdown id="createNavDropdown" title="Create">
            <NavLink href="/createCocktail"><span className="darkText">Cocktails</span></NavLink>
            <NavDropdown.Divider/>
            <NavLink id="createEquipmentNav" href="/createEquipment"><span className="darkText">Equipment</span></NavLink>
            <NavLink id="createIngredientNav" href="/createIngredient"><span className="darkText">Ingredients</span></NavLink>
            <NavLink id="createGarnishNav" href="/createGarnish"><span className="darkText">Garnish</span></NavLink>
            <NavLink id="createGlassNav" href="/createGlass"><span className="darkText">Glass</span></NavLink>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
