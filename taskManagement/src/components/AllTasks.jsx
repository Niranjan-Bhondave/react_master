import Task from "./Task"
export default function AllTasks(props){
    return(
        <div>
            {
                props.tasks.map(task=><Task key = {task.id} task={task}/>)
            }
        </div>
    )
}