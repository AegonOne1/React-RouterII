import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"


const PokemonDetalles = (props) => {
    const { PokemonId } = useParams()
    const pokemones = props.data.results || []
   
    const pokemon = pokemones.find(pokemon => pokemon.name === PokemonId)
    if (!pokemon) {
        return null
    }

    const DetailsUrl = pokemon.url

    const [Stats, SetStats] = useState({})
    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const resp = await fetch(DetailsUrl)
                if(!resp.ok) {
                    throw new Error('Error al obtener datos del pokemon')
                }
                const data = await resp.json()
                SetStats(data)
                // console.log(data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [DetailsUrl])

    let statDetail = []
    if (Stats.stats){
        statDetail = Stats.stats.map(stat => ({
            name: stat.stat.name,
            base_stat: stat.base_stat
        }))
        // console.log(statDetail)
    }

    let typeDetail = []
    if (Stats.types){
        typeDetail = Stats.types.map(type => type.type.name)
        // console.log(typeDetail)
    }

    let imageUrl = ''
    if (Stats.sprites && Stats.sprites.front_default){
        imageUrl = Stats.sprites.front_default
        // console.log(imageUrl)
    }

    return(
        <div>
            <div>
                <img src={imageUrl} alt="" />
            </div>
            <h1>{Stats.name}</h1>
            <p>Height: {Stats.height}</p>
            <p>Weight: {Stats.weight}</p>
            <div>
                {statDetail.map((stat, index) => (
                    <p key={index}>{stat.name}: {stat.base_stat}</p>
                ))}
            </div>

            <div>
                {typeDetail.map((type, index) => (
                    <p key={index}>Tipo {index + 1}: {type}</p>
                ))}
            </div>
        </div>
    )
}


export default PokemonDetalles