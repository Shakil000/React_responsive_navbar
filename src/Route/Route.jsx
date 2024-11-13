import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Context from "../components/Context/Context";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Context><MainLayout></MainLayout></Context>,
        children:[
            {
                path:'/',
                element:<Login></Login>
            },
            {
                path:'/home',
                element: <Home></Home>
            },
            {
                path:'/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
           
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ]
    }
]);

export default router;