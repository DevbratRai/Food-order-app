import React, { useContext, useState } from "react";
import { memo } from "react";
import classes from "./MedicineForm.module.css";
// import MealsContext from "../../store/Meals-context";

const CandyForm = () => {
  //   const { addCandy } = useCandy();
  const [candy, setCandy] = useState({
    name: "",
    description: "",
    price: "",
  });
  // const mealCtx = useContext(MealsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCandy((prevCandy) => ({
      ...prevCandy,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...candy, id: Math.random().toString() };
    // mealCtx.addItem(newItem);
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
          Medicine Name:
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
        <label>
          Quantity Available:
          <input
            type="text"
            name="price"
            value={candy.price}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add Product </button>
      </form>
    </div>
  );
};

export default memo(CandyForm);
