import students from "../data/students";

function StudentInfo({studentId}){

    const student = students.filter((student)=>student.id === studentId)[0];
    const studentName = student.name;
    const studentAge = student.age;
    const studentCourse = student.course;

    return(
        <div>
            <p>{studentName}</p>
            <p>{studentAge}</p>
            <p>{studentCourse}</p>
        </div>
    )
}

export default StudentInfo;