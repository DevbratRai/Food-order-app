import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { MealsProvider } from "./store/Meals-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MealsProvider>
    <App />
  </MealsProvider>
);
