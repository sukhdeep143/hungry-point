import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home'
import FoodItem from './pages/FoodItem';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import ShoppingCart from './components/ShoppingCart';
import Register from './pages/Register'
import Profile from './pages/Profile';
import { CartProvider } from './contexts/CartContext';
import HomeImge from './components/HomeImge';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Login />},
      {path: "home", element: <Home />},
      {path: "fooditem", element: <FoodItem />},
      {path: "ShoppingCart", element: <ShoppingCart />},
      {path: "HomeImge", element: <HomeImge />},
      {path: "Dashboard", element: <Dashboard />},
      {path: "errorpage", element: <ErrorPage />},
      {path: "register", element: <Register />},
      {path: "profile", element: <Profile />}
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap your router with CartProvider */}
    <CartProvider>
      <RouterProvider  router={router}/>
    </CartProvider>
  </React.StrictMode>
);
