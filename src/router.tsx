import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import MainLayout from "./pages/MainLayout";
import Tables from "./pages/Tables";
// import Menus from "./pages/Menus";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
              path: "",
              element: <Tables />,
            },
            // {
            //   path: "/menus",
            //   element: <Menus />,
            // },
          ],
    },
    {
        path: "/sign-in",
        element: <SignIn />,
    },
]);

export default router;