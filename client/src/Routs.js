import Admin from "./pages/admin/Admin";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import { ADMINROUTER, HOMEROUTER, LOGINROUTER, REGROUTER } from "./utils/consts";

export const publicRouts = [
    {
        path: HOMEROUTER, 
        element: <Home/>
    }, 

    {
        path: LOGINROUTER, 
        element: <Auth/>
    }
]
export const adminRouts = [
        {
            path: ADMINROUTER, 
            element: <Admin/>
        },
        {
            path: REGROUTER, 
            element: <Auth/>
        },
]