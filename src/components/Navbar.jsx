import { NavLink } from "react-router-dom";

export default function Navbar() {
    return(<>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/discover">Discover</NavLink>
            <NavLink to="/eula">Eula</NavLink>
        </nav>
    </>)
}