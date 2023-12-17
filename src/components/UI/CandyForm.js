import React, { useState } from "react";
import { memo } from "react";
import classes from "./CandyForm.module.css";
const CandyForm = () => {
  //   const { addCandy } = useCandy();
  const [candy, setCandy] = useState({
    name: "",
    description: "",
    price: "",
  });
  console.log("candy form");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandy((prevCandy) => ({
      ...prevCandy,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addCandy(candy);
    setCandy({
      name: "",
      description: "",
      price: "",
    });
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label>
          Candy Name:
          <input
            type="text"
            name="name"
            value={candy.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={candy.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="text"
            name="price"
            value={candy.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add </button>
      </form>
    </div>
  );
};

export default memo(CandyForm);
