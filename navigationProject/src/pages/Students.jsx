import { Link, useParams } from "react-router";
import StudentCard from "../components/StudentCard";
import students from "../data/students";

function Students(){
    return (
        <div>
            <h3>List of Students</h3>
            <ul>
                {
                    students.map((student)=>{
                        return <Link key={student.id} to={student.id.toString()}><p>{student.name}</p></Link>
                    })
                }
            </ul>
        </div>
    )
}

export default Students;