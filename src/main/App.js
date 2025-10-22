import './App.css';
import React from "react"
import Header from '../footer/Footer'
import Footer from'../header/Header'

function App() {
  return (
      
    <div>

      <h1>Hola mundo</h1>
      <h2>Este es mi proyecto en React</h2>
    <div className='Parafro'>


    <p>Biemvenido a mi primer proyecto en react, usando JavaScript y React realizo todas las tareas de esta unidad</p>
    </div>

     
      
      <MiApp titulo="Clientes" nombre1="Marcos" nombre2="Pepe" nombre3="Jhonatan"></MiApp>
      
     
      </div>
      
  );
}


class MiApp extends React.Component{
render(){
  return(
<div className='lista'>
<h4>Mi lista {this.props.titulo}:</h4>
<ul>
<li>{this.props.nombre1}</li>
<li>{this.props.nombre2}</li>
<li>{this.props.nombre3}</li>
<li>{this.props.nombre4}</li>
</ul>

</div>

  )
 }
}




export default MiApp;