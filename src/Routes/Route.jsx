import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <h1>Page not found 404</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            }
        ]
    }
])