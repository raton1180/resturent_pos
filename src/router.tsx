import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/SignIn";
import MainLayout from "./pages/MainLayout";
import Tables from "./pages/Tables";
import Menus from "./pages/Menus";
import CurrentOrders from "./pages/CurrentOrders";
import Layout from "./pages/AdminPanel/Layout";
import Home from "./pages/AdminPanel/Home";
import Hrm from "./pages/AdminPanel/Hrm";
import Customers from "./pages/AdminPanel/Customers";
import Produucts from "./pages/AdminPanel/Produucts";
import Orders from "./pages/AdminPanel/Orders";
import OrderReports from "./pages/AdminPanel/OrderReports";
import Reports from "./pages/AdminPanel/Reports";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Tables />,
      },
      {
        path: "/menus",
        element: <Menus />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/current-order",
    element: <CurrentOrders />,
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "/dashboard",
        element: <Home />,
      },
      {
        path: "/dashboard/hrm",
        element: <Hrm />,
      },
      {
        path: "/dashboard/customers",
        element: <Customers />,
      },
      {
        path: "/dashboard/products",
        element: <Produucts />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/order-reports",
        element: <OrderReports />,
      },
      {
        path: "/dashboard/reports",
        element: <Reports />,
      },
    ],
  },
]);

export default router;