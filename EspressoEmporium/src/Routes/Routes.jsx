import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import UpdateCoffee from "../Pages/UpdateCoffee";
import AddCoffee from "../Pages/AddCoffee";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/update-coffee',
        element: <UpdateCoffee />
      },
      {
        path: '/add-coffee',
        element: <AddCoffee />
      },
    ]
  },
]);
