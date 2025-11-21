import './App.css';
import React from "react"
import Header from '../footer/Footer';
import Footer from'../header/Header';
import Form from '../Components/Form.js'
import MiLista from '../Components/Milista.js';

class App extends React.Component {


state = { incidencias: [
 {
    id_usuario: "768590345h",
    titulo: "Proyector averiado en aula 2",
    descripcion: "El proyector no enciende y la lámpara parece dañada.",
    categoria: "Hardware",
    nivel_urgencia: "Alta",
    fecha_registro: "2025-10-03",
    estado: "Abierto",
    ubicacion: "A301"
},

{
    id_incidencia: 2,
    id_usuario: "e235439082s",
    titulo: "Ordenador de secretaría no enciende",
    descripcion: "El equipo no responde al presionar el botón de encendido.",
    categoria: "Hardware",
    nivel_urgencia: "Media",
    fecha_registro: "2025-10-02",
    estado: "En proceso",
    ubicacion: "B205"
},
{
    id_incidencia: 3,
    id_usuario: "c765849018q",
    titulo: "Impresora sin conexión",
    descripcion: "La impresora de la sala de profesores no aparece en red.",
    categoria: "Red/Impresión",
    nivel_urgencia: "Baja",
    fecha_registro: "2025-10-01",
    estado: "Resuelta",
    ubicacion: "Sala de profesores"
}

]}
  
agregarIncidencia = (nuevo_titulo, nuevo_descripcion, nuevo_categoria, nuevo_nivel_urgencia, nuevo_ubicacion, nuevo_usuario) => {

const fecha = new Date();
const year = fecha.getFullYear();
const month = String(fecha.getMonth() + 1).padStart(2, '0'); // meses 0-11
const day = String(fecha.getDate()).padStart(2, '0');
const fechaFormateada = `${year}-${month}-${day}`;

const nuevo_id= this.state.incidencias.length+1;

// 2. Comprobar si ya existe en la lista una incidencia con ese id
const esDuplicado = this.state.incidencias.some(incidencia => 
    incidencia.id_incidencia === nuevo_id
);

// 3. LÓGICA DE VALIDACIÓN: Si es duplicado, BLOQUEAR EL GUARDADO
if (esDuplicado) {
    // Muestra un aviso al usuario (más visible que solo la consola)
    alert('ERROR: El número de incidencia ' + nuevo_id + ' ya existe. No se guardará.');

    // **ESTO ES LO IMPORTANTE:** Usar 'return' para salir de la función
    // e impedir que se ejecute el código de guardado posterior.
    return;
}


  const nueva_incidencia = {

    titulo: nuevo_titulo,
    descripcion: nuevo_descripcion,
    id_incidencia: this.state.incidencias.length+1,
    id_usuario: nuevo_usuario,
    ubicacion: nuevo_ubicacion,
    categoria: nuevo_categoria,
    nivel_urgencia: nuevo_nivel_urgencia,
    fecha_registro: fechaFormateada,
    estado: "abierto"
    
    
  };

  this.setState({

    incidencias: [...this.state.incidencias, nueva_incidencia]
  });

  console.log("Datos recibidos: ", nueva_incidencia);

};

  
  render() {


    
      return(
     <div id='contenedor-incidencias'>
        <main>
            <h2>Lista incidencias</h2>
            <ul>
                {this.state.incidencias.map((i) => (
                 <li key= {i.id_incidencia}>
                    <strong>Titulo: </strong>{i.titulo}<br></br>
                    <strong>Descripcion:</strong> {i.descripcion}<br></br>
                    <strong>Usuario: </strong>{i.id_usuario}<br></br>
                    <strong>Ubicacion: </strong>{i.ubicacion}<br></br>
                    <strong>Urgencia: </strong>{i.nivel_urgencia}<br></br>
                    
                 </li>
                 ))}   
                
            </ul>
            
            </main>

            <aside>
            <Form agregarIncidencia={this.agregarIncidencia}></Form>
            </aside>

        </div>

                );

 
            };
  }




   
    
  



export default App;