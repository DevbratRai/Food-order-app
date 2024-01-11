import { createContext, useReducer } from "react";

const MealsContext = createContext({
  items: [],
  addItem: (item) => {},
});

const defaultMealState = {
  items: [],
};

const mealReducer = (state, action) => {
  if (action.type === "ADD") {
    const newItem = { ...action.item, id: Math.random().toString() };

    return { items: [...state.items, newItem] };
  }
  return defaultMealState;
};

export const MealsProvider = (props) => {
  const [mealState, dispatchMealAction] = useReducer(
    mealReducer,
    defaultMealState
  );

  const addMeal = (item) => {
    console.log("add meal");
    dispatchMealAction({ type: "ADD", item: item });
  };

  const mealContext = {
    items: mealState.items,
    addItem: addMeal,
  };

  return (
    <MealsContext.Provider value={mealContext}>
      {props.children}
    </MealsContext.Provider>
  );
};

export default MealsContext;
