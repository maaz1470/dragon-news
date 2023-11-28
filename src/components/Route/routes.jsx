import { Navigate, createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../pages/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../Layout/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: '/',
      element: <LoginLayout></LoginLayout>,
      children: [
        {
          path: '/',
          element: <Navigate to={'/category/0'}></Navigate>
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    },
    {
        path: 'category',
        element: <Layout />,
        children: [
          {
            path: ':id',
            element: <Category />,
            loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
          }
        ]
    },
    {
      path: 'news',
      element: <NewsLayout />,
      children: [
        {
          path: ':id',
          element: <PrivateRoute><News /></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        }
      ]
    },
    {
      path: '/login',
      element: <h1>Login Page</h1>
    }
])

export default router;