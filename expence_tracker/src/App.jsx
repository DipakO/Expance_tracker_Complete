import React from "react";
import Form from "./components/AddNewExpence/Form";
import ExpanceChart from "./components/charts/ExpanceChart";
import SearchExpence from "./components/Expences/SearchExpence";
// import Storage from "./components/Storage";

const App = () => {
  return (
    <div>
      <Form />
      <SearchExpence />
      {/* <ExpanceChart /> */}
    </div>
  );
};

export default App;
