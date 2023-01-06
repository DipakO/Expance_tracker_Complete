import React from "react";
import Style from "./Update.module.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IoReturnUpBackOutline } from "react-icons/io5";

const UpdateForm = () => {
  const { dat, tit, amoun, id } = useParams();
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      title: data.get("title"),
      amount: data.get("amount"),
      date: data.get("date"),
    };

    axios
      .put(`http://localhost:5000/user/${id}`, actualData)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    Navigate("/");
    window.location.reload;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#2193b0",
      }}
    >
      <form onSubmit={handleSubmit} className={Style.form}>
        <input
          className={Style.updateInput}
          type="text"
          placeholder="Enter the Expence item"
          defaultValue={tit}
          required
          name="title"
        />
        <input
          className={Style.updateInput}
          type="text"
          placeholder="Enter the Amount "
          defaultValue={amoun}
          required
          name="amount"
        />
        <input
          className={Style.updateInput}
          type="date"
          placeholder="Enter the Date"
          defaultValue={dat}
          required
          name="date"
        />
        <button
          style={{
            width: "8rem",
            padding: "10px 15px",
            borderRadius: "10px",
            border: "none",
            marginLeft: "7.5rem",
            cursor: "pointer",
          }}
        >
          Update Expence
        </button>
        <button className={Style.BackBtn}>
          {" "}
          <IoReturnUpBackOutline size={40} />
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
