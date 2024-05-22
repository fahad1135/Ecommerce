import React from "react";

import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HotDeals from "./pages/HotDeals";
import Categories from "./pages/Categories";
import Laptops from "./pages/Laptops";
import SmartPhones from "./pages/SmartPhones";
import Cameras from "./pages/Cameras";
import Accessories from "./pages/Accessories";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/hotdeal" element={<HotDeals />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/laptops" element={<Laptops />} />
          <Route path="/smartphones" element={<SmartPhones />} />
          <Route path="/cameras" element={<Cameras />} />
          <Route path="/accessories" element={<Accessories />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
