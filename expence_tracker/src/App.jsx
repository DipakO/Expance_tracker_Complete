import React from "react";
import Form from "./components/AddNewExpence/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import SearchExpence from "./components/Expences/SearchExpence";
import UpdateForm from "./components/UpdateExpence";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchExpence />} />
          <Route path="/updateform" element={<UpdateForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
