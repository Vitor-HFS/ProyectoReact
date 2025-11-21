import React from 'react';
import {useState} from "react";
function MiLista (props){

return(
<>

<dl>
        {props.incidencias.map((i)=>(

<React.Fragment key={i.id_incidencia}>
<dt><strong>Titulo: </strong>{i.titulo}</dt>
<dd><strong>id_incidencia: </strong>{i.id_incidencia}</dd>
<dd><strong>Descripcion: </strong>{i.descripcion}</dd>
<dd><strong>Usuario: </strong>{i.usuario}</dd>
<dd><strong>Ugencia: </strong>{i.nivel_urgencia}</dd>
<dd><strong>Ubicacion: </strong>{i.ubicacion}</dd>
<dd><strong>Estado: </strong>{i.estado}</dd>
<dd><strong>Fecha: </strong>{i.fecha_registro}</dd>

</React.Fragment>



))}


</dl>

</>

)}

export default MiLista;