import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <nav>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'active' : '' } to="/Pokemones">Pokemones</NavLink>
        </nav>
    )
}

export default NavBar