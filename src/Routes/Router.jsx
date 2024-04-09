import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/HomePage/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import MenItems from "../Pages/Categories/Men/MenItems/MenItems";
import CategoryByGender from "../Pages/Categories/CategoryByGender/CategoryByGender";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";

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
        element: <ProductDetails></ProductDetails>
      },
      {
        path: 'contact-us',
        element: <ContactUs></ContactUs>
      },
      {
        path: 'about-us',
        element: <AboutUs></AboutUs>
      }
    ]
  },

]);

export default router