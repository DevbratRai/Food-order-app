import { useContext } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMedicine.module.css";
import MedicineItem from "./MedicineItem/MedicineItem";
import MedicineContext from "../../store/Medicine-context";

const AvailableMedicine = () => {
  const medicineCtx = useContext(MedicineContext);

  const medicineList = medicineCtx.items.map((medicine) => (
    <MedicineItem
      key={medicine.id}
      id={medicine.id}
      meal={medicine}
      name={medicine.name}
      description={medicine.description}
      price={medicine.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{medicineList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMedicine;
