import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home'
import FoodItem from './pages/FoodItem';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: "fooditem", element: <FoodItem />},
      {path: "cart", element: <Cart />},
      {path: "Dashboard", element: <Dashboard />},
      {path: "errorpage", element: <ErrorPage />},
      {path: "login", element: <Login />},
      {path: "register", element: <Register />}


    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider  router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
