import React from 'react';

class MiLista extends React.Component{
    
    state={incidencias :[ 
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
    
    render(){
            return(
        <div>
            <ul>
                {this.state.incidencias.map((i) => (
                 <li key= {i.id_incidencia}>
                    <strong>Titulo: {i.titulo}</strong><br></br>
                    <strong>Descripcion: {i.descripcion}</strong><br></br>
                    <strong>Usuario: {i.id_usuario}</strong><br></br>
                    <strong>Ubicacion: {i.ubicacion}</strong><br></br>
                 </li>
                 ))}   
                
            </ul>
        </div>
     )
    }
}

export default MiLista;