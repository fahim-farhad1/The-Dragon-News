import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>This is error Page</div>,
    children:[
        {
            path:'/',
            element: <Home />
        }
    ]
  },
]);

export default router;
