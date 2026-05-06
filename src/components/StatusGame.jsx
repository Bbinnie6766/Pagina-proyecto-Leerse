import { useState } from "react";

export const StatusGame = () => {
  const [gemas, setGemas] = useState()
  const [vidas, setVidas] = useState()
  const [characters, setCharacters] = useState(0)

  return (
    <>
      <div className="gemas">
        <h1>💎 Gema: {gemas}</h1>
        <button onClick={() => setGemas(prev => prev + 1)}>gema 1</button>
        <button onClick={() => setGemas(prev => prev + 1)}>gema 2</button>
        <button onClick={() => setGemas(prev => prev + 1)}>gema 3</button>
      </div>

      <div className="vidas">
        <h1>💕 vida: {vidas}</h1>
        <button onClick={() => setVidas(prev => prev + 1)}>Vida 1</button>
        <button onClick={() => setVidas(prev => prev + 1)}>Vida 2</button>
        <button onClick={() => setVidas(prev => prev + 1)}>Vida 3</button>
      </div>
      
      <div className="vcharacters">
        <h1 style={{color: "blue"}}>🚀 character: {characters}</h1>
        <button onClick={() => setCharacters(prev => prev + 1)}>R2D2</button>
        <button onClick={() => setCharacters(prev => prev + 3)}>Doc Emmet Brown</button>
        <button onClick={() => setCharacters(prev => prev + 2)}>Pikachu</button>
      </div>
    </>
  )
}
