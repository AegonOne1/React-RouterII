import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Pokemones">Pokemones</NavLink>
        </nav>
    )
}

export default NavBar