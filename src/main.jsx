import { StrictMode } from "react";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes";
import { createRoot } from "react-dom/client";
import AuthProvider from "./Provider/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="mx-2 md:mx-20 lg:mx-32 xl:z-40">
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </div>
  </StrictMode>
);
