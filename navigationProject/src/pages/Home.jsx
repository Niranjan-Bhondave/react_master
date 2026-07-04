import { useState } from "react";
import { Link } from "react-router"; 

function Home(){
    const [loggedIn,setIsLoggedIn] = useState(false);
    return (
        <>{
            loggedIn ? 
            <div>
            <h3>Welcome to the Student Portal</h3>
            <ul>
                <li><Link to="home">Home</Link></li>
                <li><Link to="students">Students</Link></li>
                <li><Link to="dashboard">Dashboard</Link></li>
                <li><Link to="login">Login</Link></li>
            </ul>
            </div> : 
            <div>
                <button type="submit" onClick={()=>setIsLoggedIn(true)}>Login</button>
            </div>
        }</>
    )
}

export default Home;