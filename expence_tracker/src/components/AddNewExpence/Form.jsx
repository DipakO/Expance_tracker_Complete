import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
  const [hide, setHide] = useState(true);
  const [pos, setPos] = useState("none");
  const [expence, setExpence] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  useEffect(() => {
    const Style = () => {
      hide ? setPos("none") : setPos("flex");
    };
    Style();
  }, [hide]);

  const btnStyle = {
    display: hide ? "flex" : "none",
  };
  const handleClick = () => {
    setHide((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const header = { "Access-Control-Allow_Origin": "*" };
    axios.post("http://localhost:5000/user", {
      title: expence,
      amount: amount,
      date: date,
    });

    setHide((prev) => !prev);
    window.location.reload();
  };

  return (
    <div>
      <div className="mainForm">
        <div className="form">
          <div>
            <div className="mainForm">
              <div className="form">
                <form action="" onSubmit={handleSubmit}>
                  <div className="pos" style={{ display: pos }}>
                    <div className="title">
                      <div>
                        <input
                          onChange={(e) => setExpence(e.target.value)}
                          required
                          type="text"
                          placeholder="Add_Expences"
                        />
                      </div>
                      <div>
                        <input
                          onChange={(e) => setAmount(e.target.value)}
                          required
                          type="number"
                          placeholder="Enter Price"
                        />
                      </div>
                    </div>
                    <div className="title">
                      <div>
                        <input
                          onChange={(e) => setDate(e.target.value)}
                          required
                          style={{ width: "12rem", marginRight: "1rem" }}
                          type="date"
                          name=""
                          id=""
                        />
                      </div>
                      <button style={{ width: "15.5rem" }} className="btnNew">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <button
              style={btnStyle}
              className="btnAddNew"
              onClick={handleClick}
            >
              Add Expence
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
