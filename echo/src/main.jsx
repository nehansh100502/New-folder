import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/home.jsx'
import Gallery from './components/Gallery/gallery.jsx'
import Contact from './components/Contact/Contact.jsx'
import Login from './components/Login/log.jsx'
import Signup from './components/Signup/signup.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[
      {
        path:'',
        element:<Home />
      },
      {
        path:'/Gallery',
        element:<Gallery />
      },
      {
        path:"/Contact",
        element:<Contact />
      },
      {
        path:"/Login",
        element:<Login />
      },
      {
        path:"/Signup",
        element:<Signup />
      }
    ]

  }
])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path=""  element={<Home />} />
//       <Route path="Gallery"  element={<Gallery />} />
//       <Route path="Contact"  element={<Contact />} />

//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />

  </React.StrictMode>,
)
