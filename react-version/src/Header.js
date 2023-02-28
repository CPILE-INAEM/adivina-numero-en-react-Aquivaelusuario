import './Header.css';

export default function Header(props) {

  console.log(`LAs propiedades del componente header son ${JSON.stringify(props)}`)
  
  return (
   
    <h1 className='titulo'> {props.titulo}</h1>
  );
}

