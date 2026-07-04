import { useParams,Outlet, useNavigate } from "react-router";
import students from "../data/students";
import StudentInfo from "./StudentInfo";

function StudentCard(){
    const {id} = useParams();
    const studentData = students.filter((student)=>student.id === Number(id))[0];
    const navigate = useNavigate();
    function handleStudents(){
        navigate("/students");
    }

    function handleBack(){
        navigate(-1);
    }

    return(
        <div>
            <StudentInfo studentId = {studentData.id} />
            <hr />
            <Outlet context={studentData}/>
            <button type="submit" onClick={()=>handleBack()} style={{display:"block"}}>Go Back</button>
            <button type="submit" onClick={()=>handleStudents()}>Go Back to Students</button>
        </div>
    )
}

export default StudentCard;