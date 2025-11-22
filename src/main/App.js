import React from "react"
import Header from'../header/Header';
import Footer from '../footer/Footer';
import Form from '../Components/form.js'
import MiLista from '../Components/Milista.js';
import IncidentList from '../Components/IncidentList';
import { UserManagementProvider } from '../UserManagementContext'; 
import {useState} from "react";
import Fondo from "../IMG/Fondo.jpg";
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
  <UserManagementProvider>
    <div className="card" style={{ 
        backgroundImage: `url(${Fondo})`, 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }}>
     <div className='container-fluid nt-4 row'>
      <Header/>
      <h2 className="ab-4 text-center"></h2>
        <main className="col-md-6">
            <p>Esta aplicacion muestra el contenido de mi app: </p>
            <IncidentList incidencias={incidencias}></IncidentList>
             
            </main>

            <aside className="col-md-6">
            <Form agregarIncidencia={agregarIncidencia}></Form>
            </aside>
<Footer/>
        </div>
      </div>
</UserManagementProvider>
                );

 
            };




   
    
  



export default App;