import Root from "./Root";
import Login from "./components/Login";
import Profile from "./components/Profile/Profile";
import Signup from "./components/SignUp";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      {/* <Signup />
      <Login /> */}
      {/* <Profile /> */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
