import { useContext } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import MealsContext from "../../store/Meals-context";

const AvailableMeals = () => {
  const mealCtx = useContext(MealsContext);

  const mealsList = mealCtx.items.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      meal={meal}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
