import {createBrowserRouter} from "react-router-dom"
import MainPage from "../pages/MainPage"


export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>
    }
])