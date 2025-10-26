import React, { useState } from 'react';

function MiLista (){
    const [incidencias, setIncidencias]= useState([
     
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

    ])
    
   
            return(
        <div>
            <ul>
                {props.listadoIncidencias.map((i) => (
                 <li key= {i.id_incidencia}>
                    <strong>Titulo: </strong>{i.titulo}<br></br>
                    <strong>Descripcion:</strong> {i.descripcion}<br></br>
                    <strong>Usuario: </strong>{i.id_usuario}<br></br>
                    <strong>Ubicacion: </strong>{i.ubicacion}<br></br>
                    <strong>Urgencia: </strong>{i.nivel_urgencia}<br></br>
                    
                 </li>
                 ))}   
                
            </ul>
        </div>
     )
    }


export default MiLista;