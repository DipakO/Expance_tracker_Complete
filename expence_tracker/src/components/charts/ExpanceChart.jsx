import React from "react";
import Chart from "./Chart";

const ExpanceChart = ({ filteredRecords }) => {
  let chartDataPoints = [
    { label: "Jan", price: 0 },
    { label: "Feb", price: 0 },
    { label: "Mar", price: 0 },
    { label: "Apr", price: 0 },
    { label: "May", price: 0 },
    { label: "Jun", price: 0 },
    { label: "Jul", price: 0 },
    { label: "Aug", price: 0 },
    { label: "Sep", price: 0 },
    { label: "Oct", price: 0 },
    { label: "Nov", price: 0 },
    { label: "Dec", price: 0 },
  ];

  for (let record of filteredRecords) {
    let date = new Date(record.date).toDateString().split(" ")[1];
    let month = date;

    for (let row of chartDataPoints) {
      if (row.label === month) {
        row.price += record.amount;
      }
    }
  }

  return (
    <div>
      <Chart data={chartDataPoints} />
    </div>
  );
};

export default ExpanceChart;
