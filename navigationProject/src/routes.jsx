import Attendance from "./components/Attendance";
import DefualtLanding from "./components/DefaultLanding";
import ErrorPage from "./components/ErrorPage";
import Marks from "./components/Marks";
import ProtectedDashboard from "./components/ProtectedRoute";
import StudentCard from "./components/StudentCard";
import Home from "./pages/Home"
import Students from "./pages/Students";

const routes = [
    {
        path: "/",
        element:<Home />,
    },
    {
        path: "students",
        element: <Students />,
    },
    {
        path: "students/:id",
        element: <StudentCard />,
        errorElement: <ErrorPage />,
        children:[
            {index:true,element:<DefualtLanding />},
            {
                path:"attendance",
                element:<Attendance />
            },
            {
                path:"marks",
                element: <Marks />
            }
        ]
    },
    {path:"dashboard",element:<ProtectedDashboard />}
]

export default routes;