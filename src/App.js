import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CocktailDetails from "./components/CocktailDetails";
import Navigation from "./components/Navigation";
import GlassList from "./components/ViewLists/GlassList";
import IngredientList from "./components/ViewLists/IngredientList";
import EquipmentList from "./components/ViewLists/EquipmentList"
import GarnishList from "./components/ViewLists/GarnishList";
import CreateGlass from "./components/Create/CreateGlass";
import CreateGarnish from "./components/Create/CreateGarnish";
import CreateEquipment from "./components/Create/CreateEquipment";
import CreateIngredient from "./components/Create/CreateIngredient";
import CreateCocktail from "./components/Create/CreateCocktail";
import CocktailList from "./components/ViewLists/CocktailList";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/cocktails" element={<CocktailList />} />
        <Route path="/cocktail/:id" element={<CocktailDetails />} />

        <Route path="/ingredients" element={<IngredientList />} />
        <Route path="/equipment" element={<EquipmentList />} />
        <Route path="/garnish" element={<GarnishList />} />
        <Route path="/glasses" element={<GlassList />} />

        <Route path="/createCocktail" element={<CreateCocktail />} />
        <Route path="/createIngredient" element={<CreateIngredient />} />
        <Route path="/createEquipment" element={<CreateEquipment />} />
        <Route path="/createGlass" element={<CreateGlass />} />
        <Route path="/createGarnish" element={<CreateGarnish />} />
      </Routes>
    </Router>
  );
}

export default App;
