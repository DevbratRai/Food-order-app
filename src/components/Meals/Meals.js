import { Fragment } from "react";

// import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";
import CandyForm from "../UI/CandyForm";

const Meals = () => {
  return (
    <Fragment>
      {/* <MealsSummary /> */}
      <CandyForm />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
