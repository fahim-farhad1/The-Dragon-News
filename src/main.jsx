import { StrictMode } from 'react'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Routes';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='md:mx-20 mx-2'>
    <RouterProvider router={router} />
    </div>
  </StrictMode>
)
