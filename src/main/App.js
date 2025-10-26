import './App.css';
import React from "react"
import Header from '../footer/Footer';
import Footer from'../header/Header';
import MiLista from '../Components/Milista';
function App() {
  return (
      
    <div>
     
      <h1>Hola mundo</h1>
      <h2>Este es mi proyecto en React</h2>
      <div className='Parafro'>


    <p>Biemvenido a mi primer proyecto en react, usando JavaScript y React realizo todas las tareas de esta unidad</p>
    </div>

     
      
      <MiLista titulo="Clientes" nombre1="Marcos" nombre2="Pepe" nombre3="Jhonatan"></MiLista>
      
   
      </div>
     
  );
}


export default App;