import { Link } from "react-router";

function ErrorPage(){
    return(
        <div>
            <p>404. Page not found</p>
            <Link to="/"><button type="submit">Go Home</button></Link>
        </div>
    )
}

export default ErrorPage;