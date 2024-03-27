import { useParams } from "react-router"

const Pokemones = (props) =>{

    const {PokemonId} = useParams()

    return(
        <div>
            <h1>Section</h1>
            <p>{PokemonId ? PokemonId : ''}</p>
            {/* {props.data.map((Pokemon, index) =>{
                <div key={index}>
                    <h2></h2>
                    <p></p>
                </div>
            })
            } */}
        </div>
    )
}

export default Pokemones