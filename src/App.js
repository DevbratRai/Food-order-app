import { useState } from "react";
import Header from "./Components/Layout/Header";
import CartProvider from "./store/CartProvider";
import Cart from "./Components/Cart/Cart";
import MedicineForm from "./Components/UI/MedicineForm";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <MedicineForm />
    </CartProvider>
  );
}

export default App;
