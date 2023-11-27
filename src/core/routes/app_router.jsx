import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/home_view";
import LoginView from "../../features/login/views/login_view";
import Privateoute from "../auth/components/private_route";
import PublicRoute from "../auth/components/public_route";


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: 
        (
            <Privateoute>
                <HomeView />
            </Privateoute>
        ),
    },
    {
        path: "/login",
        element: 
        (
            <PublicRoute> 
                <LoginView />
            </PublicRoute>
        ),       
    },
    {
        path: "*",
        element: (
             <h1>Page not found</h1>
        ),
    }
]) 