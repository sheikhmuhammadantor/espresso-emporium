import { createBrowserRouter } from "react-router-dom";
import { AddCoffee, ErrorPage, Home, MainLayout, UpdateCoffee } from "../App";

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
