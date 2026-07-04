export default function Task({task}){
    const {id,priority,completed,dueDate,estimatedHours,category} = task
    return(
        <>
            <p>Id: {id}</p>
            <p>Priority: {priority}</p>
            <p>Completed: {completed}</p>
            <p>Due Date: {dueDate}</p>
            <p>Estimated Hours: {estimatedHours}</p>
            <p>Category: {category}</p>
        </>
    )
}