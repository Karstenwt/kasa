import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import APropos from "./pages/APropos";
import PropertyDetail from "./pages/PropertyDetail";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import Header from "./components/Header";
import annonces from "./data/annonces.json";

const App = () => {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    setAppartements(annonces); // Charger les données des annonces une seule fois
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home appartements={appartements} />} />{" "}
        <Route path="/apropos" element={<APropos />} />
        <Route
          path="/property/:id"
          element={<PropertyDetail appartements={appartements} />}
        />{" "}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
