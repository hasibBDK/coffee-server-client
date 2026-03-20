import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/updateCoffee.jsx';
import Signin from './Components/Signin.jsx'
import Signup from './Components/Signup.jsx'
import AuthProvider from './provider/Authprovider.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "AddCoffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "updateCoffee/:id",
    element : <UpdateCoffee></UpdateCoffee>,
    loader: ({params}) => fetch(`https://coffe-store-server-one-flame.vercel.app/coffee/${params.id}`),
  },
  {
    path:"signin",
    element : <Signin></Signin>
  },
  {
    path:"signup",
    element :<Signup></Signup>
  }
]);

createRoot(document.getElementById('root')).render(
   <StrictMode>
    <Toaster />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
