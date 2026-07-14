import { useState } from "react";

export default function Notification({notification}){

    const {id,title,message,read} = notification;
    const [messageStatus,setMessageStatus] = useState(read);

    function handleClick(){
        if(messageStatus == false){
            setMessageStatus(true);
        }
    }

    return (
        <div onClick={()=>handleClick()} style={read == true ? {backgroundColor:"red"} : {backgroundColor:"green"}}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    )
}