import SidebarRight from "./Sidebar-Right";
import SidebarLeft from "./SidebarLeft";
import "../styles/MainBody.css";
import CustomerPortfolio from "./CustomerPortfolio";

export default function MainBody(){
    return(
        <div className="mainbody">
            <SidebarLeft />
            <CustomerPortfolio />
            <SidebarRight />
        </div>
    )
}