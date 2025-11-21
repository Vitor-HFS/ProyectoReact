import './App.css';
import React from "react"
import Header from '../footer/Footer';
import Footer from'../header/Header';
import Form from '../Components/form.js'
import MiLista from '../Components/Milista.js';
import {useState} from "react";
function App (){

    const [incidencias, setIncidencia] = useState([

 { 
},
{  
},
{
}

])
  
const agregarIncidencia = (nuevo_titulo, nuevo_descripcion, nuevo_categoria, nuevo_nivel_urgencia, nuevo_ubicacion, nuevo_usuario) => {

const fecha = new Date();
const year = fecha.getFullYear();
const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11
const day = String(fecha.getDate()).padStart(2, '0');
const fechaFormateada = `${year}-${month}-${day}`;

  const nueva_incidencia = {

    titulo: nuevo_titulo,
    descripcion: nuevo_descripcion,
    id_incidencia: incidencias.length+1,
    id_usuario: nuevo_usuario,
    ubicacion: nuevo_ubicacion,
    categoria: nuevo_categoria,
    nivel_urgencia: nuevo_nivel_urgencia,
    fecha_registro: fechaFormateada,
    estado: "abierto"
    
    
  };

  setIncidencia([...incidencias, nueva_incidencia]
  );

  console.log("Datos recibidos: ", nueva_incidencia);

};

    
      return(
        <>
        <Header></Header>
     <div id='contenedor-incidencias'>
        <main>
            <p>Esta aplicacion muestra el contenido de mi app: </p>
            <MiLista incidencias={incidencias}></MiLista>
             
            </main>

            <aside>
            <Form agregarIncidencia={agregarIncidencia}></Form>
            </aside>

        </div>
        <Footer></Footer>
</>
                );

 
            };




   
    
  



export default App;