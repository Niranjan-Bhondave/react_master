import { useOutletContext, useParams } from "react-router";
import students from "../data/students";

function Marks(){

    const student = useOutletContext();
    return(
        <div>
            <p>Marks:{student.marks}</p>
        </div>
    )
}

export default Marks;