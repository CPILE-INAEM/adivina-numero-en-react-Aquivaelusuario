
import './App.css'
import { useState, useRef, useEffect} from 'react';
import MostrarMensaje from './MostrarMensaje'

const randomNumber = () => Math.trunc(Math.random() * 20) + 1


function App() {

  const [number, setNumber] = useState('')
  const [score, setScore] = useState(20)
  const [highScore, setHighscore] = useState (0)
  const [secretNumber, setSecretNumber] = useState(randomNumber())
  const inputRef= useRef(null)

  const handleCheck = () => {
    setNumber(Number(inputRef.current.value))
    
  }
    
  useEffect(() => {
      console.log(`el numero secreto es ${secretNumber}`)
      console.log(`el numero introducido es ${number}`)
      if (number === secretNumber){      
        // mensaje has ganado HECHO
        //mostrar el numero secreto
        //si el score es mayor que el highscore, actualizar el highscore

        }else if (score===1){
        setScore(score - 1)
          //mensaje PERDISTE 

      }else {
          //mensaje es  mas bajo HECHO
          //disminuir el score
        setScore(score - 1)
      }
  }, [number])

  return (
    <div>
          {console.log('Renderizando app')}

      <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again">Again!</button>
      <div className="number">{number===secretNumber ? number : '?'}</div>
    </header>
    <main>
      <section className="left">
        <input type="number" className="guess" ref={inputRef}/>
        <button className="btn check" onClick={handleCheck}>Check!</button>
      </section>
      <section className="right">
        <MostrarMensaje score={score} number={number} secretNumber={secretNumber}/>
        <p className="label-score">💯 Score: <span className="score">{score}</span></p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">{highScore}</span>
        </p>
      </section>
    </main>
    </div>
  );
}

export default App;
