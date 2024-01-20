import { createContext, useReducer } from "react";

const MedicineContext = createContext({
  items: [],
  addItem: (item) => {},
});

const defaultMedicineState = {
  items: [],
};

const medicineReducer = (state, action) => {
  if (action.type === "ADD") {
    const newItem = { ...action.item, id: Math.random().toString() };

    return { items: [...state.items, newItem] };
  }
  return defaultMedicineState;
};

export const MedicineProvider = (props) => {
  const [medicineState, dispatchMedicineAction] = useReducer(
    medicineReducer,
    defaultMedicineState
  );

  const addMedicine = (item) => {
    console.log("add medicine");
    dispatchMedicineAction({ type: "ADD", item: item });
  };

  const medicineContext = {
    items: medicineState.items,
    addItem: addMedicine,
  };

  return (
    <MedicineContext.Provider value={medicineContext}>
      {props.children}
    </MedicineContext.Provider>
  );
};

export default MedicineContext;
