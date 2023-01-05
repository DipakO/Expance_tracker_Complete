import React from "react";
import { useState, useCallback } from "react";
import { useEffect } from "react";
import "./Storage.css";

const Storage = ({ status, Data }) => {
  const [data, setData] = useState([]);

  const filtData = data.filter((value) => {
    if (status === " ") {
      return value;
    } else if (value.date.toLowerCase().includes(status.toLowerCase())) {
      return value;
    }
  });

  const priceArray = filtData.map((item) => item.amount);
  const maxPrice = Math.max(...priceArray);
  // console.log(...priceArray);

  let total = filtData.reduce((total, item) => {
    return total + item.amount;
  }, 0);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((expance) => setData(expance));
  }, []);

  Data(data);

  return (
    <div className="container">
      {total ? (
        <h1 className="overAllSpending">
          {" "}
          OverAll Spending In This Year : {total}
          <p> maximum spend in one month is : {maxPrice}</p>
        </h1>
      ) : (
        <h1 className="overAllSpending">No Data Found</h1>
      )}

      {data
        .filter((value) => {
          if (status === " ") {
            return value;
          } else if (value.date.toLowerCase().includes(status.toLowerCase())) {
            return value;
          }
        })
        .map((item) => {
          let date = new Date(item.date).toDateString();

          return (
            <div key={item._id} className="table">
              <div className="dateContainer">
                <h3 className="h3">{date}</h3>
                <h1 className="tit">{item.title}</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "18rem",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#40005d",
                    padding: "10px",
                    border: "1px solid white",
                    borderRadius: "10px",
                    color: "white",
                  }}
                >
                  Update Expence
                </button>
                <h1 className="amount">
                  {item.amount}
                  <i className="bi bi-currency-rupee"></i>
                </h1>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Storage;
