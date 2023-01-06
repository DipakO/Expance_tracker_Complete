import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import SearchExpence from "./components/Expences/SearchExpence";
import UpdateForm from "./components/UpdateExpence";
// import Map from "./components/Map";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchExpence />} />
          <Route
            path="/updateform/:tit/:amoun/:dat/:id"
            element={<UpdateForm />}
          />
        </Routes>
      </BrowserRouter>
      {/* <Map /> */}
    </div>
  );
};

export default App;
