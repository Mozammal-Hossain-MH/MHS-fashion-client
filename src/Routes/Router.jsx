import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import MenItems from "../Pages/Categories/Men/MenItems/MenItems";
import CategoryByGender from "../Pages/Categories/CategoryByGender/CategoryByGender";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Authentication from "../Pages/Authentication/Authentication";
import Cart from "../Pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'category/:gender',
        element: <CategoryByGender></CategoryByGender>
      },
      {
        path: `category/men/:itemName`,
        element: <MenItems></MenItems>
      },
      {
        path: 'product/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path: 'contact-us',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'about-us',
        element: <AboutUs></AboutUs>
      },
      {
        path: 'cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: 'authentication',
        element: <Authentication></Authentication>
      }
    ]
  },

]);

export default router