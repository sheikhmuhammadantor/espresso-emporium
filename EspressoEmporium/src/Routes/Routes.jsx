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
        loader: () => fetch('https://emporium-server-six.vercel.app/coffee')
      },
      {
        path: '/update-coffee/:id',
        element: <UpdateCoffee />,
        loader: ({params}) => fetch(`https://emporium-server-six.vercel.app/coffee/${params.id}`)
      },
      {
        path: '/add-coffee',
        element: <AddCoffee />
      },
    ]
  },
]);
