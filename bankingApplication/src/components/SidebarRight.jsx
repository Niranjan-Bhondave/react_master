import customerInformation from "../Data/CustomerInformation"

export default function SidebarRight(){

    const notifications = customerInformation.notifications;

    return (
        <div>
            <h2>Alerts</h2>
            <br />
            {
                notifications.map((notification)=>{
                    return 
                })
            }
        </div>
    )
}