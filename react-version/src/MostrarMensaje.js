import './MostrarMensaje.css'

export default function MostrarMensaje({number, secretNumber}) {
  if (secretNumber === number){

        return <p className='message'>Has acertado!</p>

  }else if (number > secretNumber){

    return <p className='message'>El numero secreto es mas bajo</p>


  }else if (number < secretNumber){

    return <p className='message'>El numero secreto es mas alto</p>


  }else{
  return <p className="message" >Empezamos a jugar...</p>

  }
}
