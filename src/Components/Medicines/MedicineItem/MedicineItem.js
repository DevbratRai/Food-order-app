import React, { useContext } from "react";
import classes from "./MedicineItem.module.css";

import CartContext from "../../../store/cart-context";

const MedicineItem = (props) => {
  const cartCtx = useContext(CartContext);

  const handleBuy = (item, quantity) => {
    cartCtx.addItem({
      ...item,
      id: props.id,
      amount: quantity,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price}</div>
      </div>
      <div>
        <button onClick={() => handleBuy(props.meal, 1)}>Buy One</button>
        <button onClick={() => handleBuy(props.meal, 2)}>Buy Two</button>
        <button onClick={() => handleBuy(props.meal, 3)}>Buy Three</button>
      </div>
    </li>
  );
};

export default MedicineItem;
