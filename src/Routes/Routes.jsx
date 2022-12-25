import { createBrowserRouter } from "react-router-dom";
import AddToCart from "../Components/Pages/AddToCart/AddToCart";
import Blogs from "../Components/Pages/Blogs/Blogs";
import Home from "../Components/Pages/Home/Home/Home";
import ProductDetails from "../Components/Pages/Home/ProductDetails/ProductDetails";
import Login from "../Components/Pages/Login/Login";
import NotFound from "../Components/Pages/NotFound/NotFound";
import Register from "../Components/Pages/Register/Register";
import Main from "../Layout/Main/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/card",
        element: <AddToCart></AddToCart>,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({params})=>{
            return fetch(`https://fakestoreapi.com/products/${params.id}`);
        }
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router