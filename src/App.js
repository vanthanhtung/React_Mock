import React from "react";

import ListingData from "./components/ListingData";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import DetailData from "./components/DetailData";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<ListingData />} />
          <Route path="/detail/:id" element={<DetailData />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
