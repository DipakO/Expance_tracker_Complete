import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Storage.css";

const Storage = ({ status, Data }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((expance) => setData(expance));
  }, []);

  Data(data);

  return (
    <div className="container">
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
                <h1 className="title">{item.title}</h1>
              </div>
              <div>
                <h1 className="amount">{item.amount}</h1>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Storage;
