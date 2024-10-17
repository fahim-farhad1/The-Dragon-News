import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import CategoriesLayout from "../Layout/CategoriesLayout";
import CategoryNews from "../Components/CategoryNews/CategoryNews";
import NewsCard from "../Components/NewsCard/NewsCard";

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
        path: '/about',
        element: <>This is About Page</>
      },
      {
          path: '/career',
          element: <>this is career page</>
      },
      {
        path: "/:categories",
        element: <CategoriesLayout />,
        errorElement: <>This is error page</>,
        children:[
          {
            path:'/:categories',
            loader: () => fetch('../../public/News.json'),
            element: <CategoryNews />
          }
        ]
      },
    ],
  },
]);

export default router;
