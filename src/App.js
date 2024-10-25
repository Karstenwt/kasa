import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import APropos from "./pages/Apropos/APropos";
import PropertyDetail from "./pages/PropertyDetail/PropertyDetail";
import NotFound from "./pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import annonces from "./data/annonces.json";
import "./styles/App.scss";

const App = () => {
  const [appartements, setAppartements] = useState([]);

  useEffect(() => {
    setAppartements(annonces);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home appartements={appartements} />} />
        <Route path="/apropos" element={<APropos />} />
        <Route
          path="/property/:id"
          element={<PropertyDetail appartements={appartements} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
