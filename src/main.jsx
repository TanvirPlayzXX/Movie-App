import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Home from './Home/Home';
import './index.css'
import Favourities from './Favourities/Favourities';




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

             {path: "/",element: <Home />},
             {path: "/fav",element: <Favourities />},


              ]
  
  },
]);


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
 <RouterProvider router={router} />
</StrictMode>

)