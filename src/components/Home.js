import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="logoContainer">
        <img src={require("../images/cocktail.png")} className="logoImage"/>
        <h1 className="homeTitle">Nice Cocktails</h1>
      </div>
      <Link to="/cocktails" id="getStarted">
      <Button variant="dark">
        Get Started
      </Button>

      </Link>
    </div>
  );
};

export default Home;
