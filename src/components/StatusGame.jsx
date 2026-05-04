import { useState } from "react";

export const StatusGame = () => {
  const [gemas, setGemas] = useState({})
  const [vidas, setVidas] = useState({})

  return (
    <>
      <div className="gemas">
        <button>gema 1</button>
        <button>gema 2</button>
        <button>gema 3</button>
      </div>

      <div className="vidas">
        <button>Vida 1</button>
        <button>Vida 2</button>
        <button>Vida 3</button>
      </div>
      
      <div className="vcharacters">
        <h1>🚀 character: _____</h1>
        <button>character 1</button>
        <button>character 2</button>
        <button>character 3</button>
      </div>
    </>
  )
}
