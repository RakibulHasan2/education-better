import { createBrowserRouter } from "react-router-dom";
import Blog from "../Component/Blog/Blog";
import CourseDetails from "../Component/CourseDetails/CourseDetails";
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
                loader: () => fetch('https://education-better-server-rakibulhasan2.vercel.app/courses'),
                element:<Courses></Courses>
            },
            {
                path:'/courses/:id',
                loader: async ({params}) =>{
                //   console.log(params.id)
                  return fetch(`https://education-better-server-rakibulhasan2.vercel.app/courses/${params.id}`)
                },
                element:<CourseDetails></CourseDetails>
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