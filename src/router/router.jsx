import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage";
import TimeLine from "../Pages/TimeLine";
import Stats from "../Pages/Stats";
import RootLayout from "../layout/RootLayout";
import ErrorPage from "../Pages/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index:true,
                element:<HomePage/>
            },
            {
                path: "/timeline",
                element: <TimeLine />
            },
            {
                path: "/stats",
                element: <Stats />
            }
        ],
        errorElement: <ErrorPage/>

    }
]);