import { StrictMode } from 'react'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Routes';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='mx-2 md:mx-20 lg:mx-32 xl:z-40'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>
)
