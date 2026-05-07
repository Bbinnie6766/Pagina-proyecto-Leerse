import { useEffect, useState } from "react";

export const EmanuelRMPage = () => {

    const [characters, setCharacters] = useState([])
    const [pokemons, setPokemons] = useState([])

    const getCharacters = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()

        setCharacters(data.results)
        console.log(data)

    }

    const getPokemons = async () => {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        const data = await res.json()

        setPokemons(data.results)
        console.log(data)

    }

    useEffect(() => {
        getCharacters()
        getPokemons()
        return () => { }
    }, [])

    return (
        <>
            <h1>Personajes de Rick and Morty</h1>

            {characters.map((char, index) => (
                <div key={index} className="card" style={{ width: "18rem" }}>
                    <img src={char.image} className="card-img-top" alt={char.name} />
                    <div className="card-body">
                        <h5 className="card-title">{char.name}</h5>
                        <p className="card-text">status: {char.status}</p>
                        <p className="card-text">species: {char.species}</p>
                    </div>
                </div>
            ))}




        </>
    )
}
