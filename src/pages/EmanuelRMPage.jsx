import { useEffect, useState } from "react";

export const EmanuelRMPage = () => {

    const [characters, setCharacters] = useState([])

    const getCharacters = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = res.json()

        console.log(data)

    }

    useEffect(() => {
        getCharacters()

        return () => {
            second
        }
    }, [third])
        ()

    return (
        <>
            <div>EmanuelRMPage</div>

        </>
    )
}
