import { Link } from "react-router-dom";
import "./nav.css"


function Nav(){
    return (
        <div className="nav-bar">
         <Link to="/" className="butn">SignUP</Link>
         <Link to="/login" className="butn">Login</Link>
        </div>
    )
}
export default Nav;