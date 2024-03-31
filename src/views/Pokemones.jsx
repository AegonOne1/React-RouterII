import { useNavigate } from "react-router"
import { useState } from "react"

const Pokemones = (props) => {
    const [MostrarPokemones, setMostrarPokemones] = useState('')
    const pokemones = props.data.results || []
    const navigate = useNavigate()

    const handleChange = (e) => {
        // console.log(e.target.value)
        setMostrarPokemones(e.target.value)
    }

    const handleClick = () => {
        // console.log(handleClick)
        navigate(`/Pokemones/${MostrarPokemones}`)
    }

    return (
        <div className="selectorLayout">
            <h1>Selecciona un pokemon</h1>
            <select className="selectConfig" onChange={(e) => handleChange(e)}>
                        <option value="">Selecciona tu pokemon</option>
                        {pokemones.map((pokemon, index) => (
                            <option key={index} value={pokemon.name}>
                                {pokemon.name}
                            </option>
                        ))}
            </select>
            <button className="buttonConfig" onClick={handleClick}>Ver Detalle</button>
        </div>
    )
}

export default Pokemones