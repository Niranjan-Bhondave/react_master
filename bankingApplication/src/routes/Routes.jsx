import { createBrowserRouter } from "react-router"
import Dashboard from "../pages/Dashboard"
import Transactions from "../pages/Transactions"
import TransactionDetails from "../components/TransactionDetails"

export const Routes = createBrowserRouter([
    {
        path:"/dashboard",
        element: <Dashboard />
    },
    {
        path:"/transactions",
        element: <Transactions />
    },
    {
        path:"/transactions/:id",
        element: <TransactionDetails />
    }
])