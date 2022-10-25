import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import Courses from "../Component/Courses/Courses";
import Home from "../Component/Home/Home";
import Main from "../Layout/Main";



export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/courses',
                element:<Courses></Courses>
            },
            {
                path: '/FAQ',
                element:<h1>FAQ page</h1>
            },
            {
                path: '/Blog',
                element: <Blog></Blog>
            },  {
                path: '/login',
                element: <h1>Login page</h1>
            }
        ]
    }
])