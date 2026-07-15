import customerInformation from "../Data/CustomerInformation"
import Notification from "./Notification";

export default function SidebarRight(){

    const notifications = customerInformation.notifications;

    return (
        <div>
            <h2>Alerts</h2>
            <br />
            {
                notifications.map((notification)=>{
                    return <Notification key = {notification.id} notification={notification}/>
                })
            }
        </div>
    )
}