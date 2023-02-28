//Seleccionar los elementos del Dom y guardarlos en variables
const scoreField = document.querySelector('.score')
const highScoreField = document.querySelector('.highscore')
const numberField = document.querySelector('.number')
const message = document.querySelector('.message')
const checkButton = document.querySelector('.check')
const guessField = document.querySelector('.guess')
const againButton = document.querySelector('.again')
const bodyField=document.querySelector('body')


console.log(

  scoreField,
  checkButton,
  againButton,
  guessField,
  highScoreField,
  message,
  numberField
)

// 2do paso crear las variables que necesitamos

let score=20
let highScore = 0

//obtener un numero aleatorio entre 1 y 20
const MIN_NUMBER=1
const MAX_NUMBER=20
let secretNumber

fnInitApp()


//3er paso añadir un listener al checkbutton y mostrar 
//un mensaje que diga si el numero es mayor o menor en el campo messageField
// ...

checkButton.addEventListener('click', fnCheckButtom) 

  function mostrarMensaje(mensaje){
    message.textContent=mensaje
  
  }
  
  function fnCheckButtom(){
  
    const number = Number(guessField.value)
    
  
    if (number === secretNumber){
        mostrarMensaje('Ganaste')
      if (score > highScore ){highScoreField.textContent=score}
      bodyField.style.backgroundColor ='#60b347'
      numberField.textContent =secretNumber
    }else if(score === 1){
    
      mostrarMensaje('Perdiste')
      scoreField.textContent =0
      bodyField.style.backgroundColor= '#b34747'
    
    }else{
      const mensaje =
      
      number > secretNumber ? 'El numero es menor' : 'El numero es mayor'
      mostrarMensaje(mensaje)
      score--
      scoreField.textContent=score
  
  
    }
  
  
  }

//4to paso again button

againButton.addEventListener('click', fnInitApp)

function fnInitApp(){

  score=20
  scoreField.textContent = score

  guessField.value = ''
  highScore= Number(localStorage.getItem('highscore')) || 0
  highScoreField.textContent=highScore


  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER
  console.log(`El número secreto es ${secretNumber}`)
  mostrarMensaje('Empieza a adivinar...')
  bodyField.style.backgroundColor = 'purple'
  numberField.textContent = '?'


}


