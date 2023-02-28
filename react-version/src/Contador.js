import { useState } from "react"

export default function Contador(){

  const [count, setCount] = useState(5)


  const aumentarContador= function ()  {

    setCount(count + 1)
    console.log(count)

  }

  function disminuirContador  ()  {

    setCount(count - 1)
    console.log(count)

  }

  return (


    <div>

          <p>Contador</p>
          <button onClick={aumentarContador}>Incrementar</button>
          <button onClick={disminuirContador}>Disminuir</button>

          <p>Me has pulsado {count} veces</p>

    </div>


  )


}