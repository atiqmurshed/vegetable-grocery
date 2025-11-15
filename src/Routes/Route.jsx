import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import Card from "../Components/Card/Card";
import About from "../Components/AboutPage/About";
import Blog from "../Components/Blog/Blog";

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
            }
        ]
    }
])