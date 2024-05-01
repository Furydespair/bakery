import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
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