import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import About from "../Components/AboutPage/About";
import Blog from "../Components/Blog/Blog";
import Contact from "../Components/Contact";
import OurMenu from "../Components/OurMenu";
import Login from "../Components/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <h1>Page not found 404</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/shop',
                element: <About></About>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/menu',
                element: <OurMenu></OurMenu>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
        ]
    }
])