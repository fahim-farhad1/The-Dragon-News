import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <div>This is error Page</div>,
    children:[
        {
            path:'/',
            element: <div>Hi this home page</div>
        }
    ]
  },
]);

export default router;
