import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./Storage.css";
import { Link } from "react-router-dom";
import { RiDeleteBin2Fill } from "react-icons/ri";
import axios from "axios";

const Storage = ({ status, Data, text }) => {
  const [data, setData] = useState([]);

  // Filtered Data by Year
  const filtData = data.filter((value) => {
    if (status === " ") {
      return value;
    } else if (value.date.toLowerCase().includes(status.toLowerCase())) {
      return value;
    }
  });

  // Calculate Max Price in the Year
  const priceArray = filtData.map((item) => item.amount);
  const maxPrice = Math.max(...priceArray);

  // Calculate total price in the year
  let total = filtData.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  useEffect(() => {
    fetch(`http://localhost:5000/user/${text}`)
      .then((res) => res.json())
      .then((expance) => setData(expance));
  }, [text]);

  Data(data);

  return (
    <div className="container">
      {/* Calculation Total Price in year And Max Price in the month */}
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
                <h3 className="tit">{item.title}</h3>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "20rem",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    backgroundColor: "#40005d",
                    padding: "10px",
                    border: "1px solid white",
                    borderRadius: "10px",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  <Link
                    className="UpdateLink"
                    to={`/updateform/${item.title}/${item.amount}/${item.date}/${item._id}`}
                  >
                    Update Expences
                  </Link>
                </button>
                <button
                  className="DeleteBtn"
                  onClick={() => {
                    axios
                      .delete(`http://localhost:5000/user/${item._id}`)
                      .then((res) => console.log(res.data))
                      .catch((err) => console.log(err));
                    window.location.reload();
                  }}
                >
                  <RiDeleteBin2Fill color="red" size={30} />
                </button>
                <h3 className="amount">
                  {item.amount}
                  <i className="bi bi-currency-rupee"></i>
                </h3>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Storage;
