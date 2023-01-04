import React from "react";
import { useState } from "react";
import ExpanceChart from "../charts/ExpanceChart";
import Storage from "../Storage";
import style from "./search.module.css";

const SearchExpence = () => {
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  // console.log(status);
  const Data = (records) => {
    setData(records);
  };

  let filteredRecords = data.filter((value) => {
    if (status === "") {
      return value;
    } else if (value.date.toLowerCase().includes(status.toLowerCase())) {
      return value;
    }
  });

  return (
    <div className={style.middle}>
      <div className={style.mainDiv}>
        <div className={style.filtDiv}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "50rem",
            }}
          >
            <div>
              <h1 className={style.filtH1}>filter by year</h1>
            </div>
            <div>
              <select
                onChange={handleChange}
                className={style.select}
                name="year"
                id="year"
              >
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
          </div>
        </div>
        <ExpanceChart filteredRecords={filteredRecords} />
        <Storage status={status} Data={Data} />
      </div>
    </div>
  );
};

export default SearchExpence;
