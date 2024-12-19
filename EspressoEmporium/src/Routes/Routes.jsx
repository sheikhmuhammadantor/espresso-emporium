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
        element: <Home />,
        // loader: () => fetch(`${import.meta.env.VITE_URL}/coffee`)
      },
      {
        path: '/update-coffee/:id',
        element: <UpdateCoffee />,
        loader: ({params}) => fetch(`${import.meta.env.VITE_URL}/coffee/${params.id}`)
      },
      {
        path: '/add-coffee',
        element: <AddCoffee />
      },
    ]
  },
]);
