import { useParams } from "react-router"

const Pokemones = (props) =>{

    const {PokemonId} = useParams()

    const pokemones = props.data.results || []

    return(
        <div>
            <h1>Selecciona un pokemon</h1>
            <select >
                <option value="">Selecciona tu pokemon</option>
                {pokemones.map((pokemon, index) =>(
                    <option key={index} value={pokemon.name}>
                        {pokemon.name}
                    </option>
                ))}
            </select>
            
            <button>Ver Detalle</button>
        </div>
    )
}

export default Pokemones