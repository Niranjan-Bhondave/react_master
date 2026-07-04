import { useOutletContext, useParams } from "react-router";
import students from "../data/students";

function Attendance(){
    const student = useOutletContext();
    return (
        <div>
            <p>Attendance:{student.attendance}</p>
        </div>
    ) 
}

export default Attendance;