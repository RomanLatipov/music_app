import { NavLink } from "react-router-dom";

export default function Navbar() {
    return(<>
        <nav class="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/discover">Discover</NavLink>
            <NavLink to="/form">Form</NavLink>
        </nav>
    </>)
}