import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ data }) => {
  let pricesArray = data.map((row) => row.price);
  let maxPrice = Math.max(...pricesArray);
  return (
    <div className="chart">
      {data.map((record) => {
        return (
          <ChartBar
            key={record.label}
            label={record.label}
            value={record.price}
            maxValue={maxPrice}
          />
        );
      })}
    </div>
  );
};

export default Chart;
