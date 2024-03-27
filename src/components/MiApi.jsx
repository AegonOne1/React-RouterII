import { useEffect, useState } from "react"

const MiApi = () => {
    const [datosApi, setDatosApi] = useState([])

    useEffect(() =>{
        const fetchData = async () =>{
            try {
                const resp = await fetch('https://pokeapi.co/api/v2/pokemon/')
                if(!resp.ok) {
                    throw new Error('Error al obtener datos de la Api')
                }
                const data = await resp.json()
                setDatosApi(data)
                console.log(data)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [])

    return datosApi
}

export default MiApi