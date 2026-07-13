import bank_logo from "../assets/bank_logo.png";
import  "../styles/Header.css";
import bell_icon from "../assets/bell_icon.png";
import user_icon from "../assets/user_icon.png";
import dark_mode_icon from "../assets/dark_mode_icon.png";


export default function Header(){
    return(
        <div className="header">
            <><img src={bank_logo} alt="logo" width="70px"/></>
            <h1>Customer Dashboard</h1>
            <div className="header-right">
                <img src={bell_icon} alt="notif" width="50px"/>
                <img src={dark_mode_icon} alt="theme" width="50px"/>
                <img src={user_icon} alt="profile" width="50px"/>
            </div>
        </div>
    )
}