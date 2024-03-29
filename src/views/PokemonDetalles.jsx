import { useParams } from "react-router"
import { useEffect, useState } from "react"


const PokemonDetalles = (props) => {
    const { PokemonId } = useParams()
    const pokemones = props.data.results || []
    // const navigate = useNavigate()
    // // console.log(pokemones) si, pokemones es un array vacio entonces find muere,
    // console.log(pokemones)
    // if(pokemones.length === 0){
    //     navigate("/")
    //     console.log("hola")
    // }
    const DetailsUrl = pokemones.find(pokemon => pokemon.name === PokemonId).url
    console.log(DetailsUrl)
    const [Stats, SetStats] = useState([])
    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const resp = await fetch(DetailsUrl)
                if(!resp.ok) {
                    throw new Error('Error al obtener datos de la Api')
                }
                const data = await resp.json()
                SetStats(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])
    return Stats
}


export default PokemonDetalles