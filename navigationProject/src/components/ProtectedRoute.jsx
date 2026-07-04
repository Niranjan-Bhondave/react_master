import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function ProtectedDashboard(){
    const [loggedIn,setLoggedIn] = useState(false);
    return(
        <>{
            loggedIn ?  <Dashboard /> : <Login onClick={()=>setLoggedIn(true)}/>
        }
        </>
    )
}

export default ProtectedDashboard;