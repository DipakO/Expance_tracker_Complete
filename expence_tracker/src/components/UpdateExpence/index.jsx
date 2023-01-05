import React from "react";
import Style from "./Update.module.css";

const UpdateForm = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form className={Style.form}>
        <input className={Style.updateInput} type="text" />
        <input className={Style.updateInput} type="number" />
        <input className={Style.updateInput} type="date" name="" id="" />
        <button
          style={{
            width: "8rem",
            padding: "10px 15px",
            borderRadius: "10px",
            border: "none",
            textAlign: "center",
            marginLeft: "7.5rem",
          }}
        >
          Update Expence
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
