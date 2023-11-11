import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard.tsx";
import Signup from "./views/Signup.tsx";
import Login from "./views/Login.tsx";
import GuestLayout from "./components/GuestLayout.tsx";
import DefaultLayout from "./components/DefaultLayout.tsx";
import Team from "./views/Team.tsx";



const router = createBrowserRouter([

  
    {
        path:'/',
        element:<DefaultLayout />,  
        children:[
            {
                path:'/',
                element:<Navigate to ="/dashboard" />
            },
            {
                path:'/dashboard',
                element:<Dashboard />     
            },
            {
                path:'/team',
                element:<Team />     
            },
        ]
    },
    {
        path:'/',
        element:<GuestLayout />,
        children:[
            {
                path:'signup',
                element:<Signup />  
            },
            {
                path:'login',
                element:<Login />     
            }
        ]

    }
])


export default router;


