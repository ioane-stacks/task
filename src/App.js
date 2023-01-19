import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Navigation from "./components/Navigation/Navigation";
import MostSolidProduct from "./components/MostSolid/MostSolidProduct";
import { createContext, useEffect, useState } from "react";
import Home from "./components/Home/Home";

export const useProps = createContext(null);

function App() {
  const [mostSolidId, setMostSolidId] = useState(null);
  return (
    <useProps.Provider value={{ mostSolidId, setMostSolidId }}>
      <Router>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Home />} />
            <Route path="/mostsolidproduct/:id" element={<MostSolidProduct />} />
          </Route>
        </Routes>
      </Router>{" "}
    </useProps.Provider>
  );
}

export default App;
