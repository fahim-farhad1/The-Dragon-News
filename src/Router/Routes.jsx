import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CategoriesLayout from "../Layout/CategoriesLayout";
import CategoryNews from "../Components/CategoryNews/CategoryNews";
import SingleNews from "../Pages/SingleNews";
import Registration from "../Pages/Registration";
import Login from "../Pages/Login";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>This is error Page</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <PrivateRoutes><>This is About Page</></PrivateRoutes>
      },
      {
        path: "/career",
        element: <PrivateRoutes><>this is career page</></PrivateRoutes>
      },
      {
        path: "/:categories/:id",
        loader: () => fetch("../../public/News.json"),
        element: <SingleNews />,
      },
      {
        path: "/:categories",
        element: <CategoriesLayout />,
        errorElement: <>This is error page</>,
        children: [
          {
            path: "/:categories",
            loader: () => fetch("../../public/News.json"),
            element: <CategoryNews />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);

export default router;
