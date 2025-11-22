import { useContext } from "react";
import { UserManagementContext, UserManagementProvider } from '../UserManagementContext'; 
function IncidentList(){

const {incidencias} = useContext(UserManagementContext);

return(

<table className="table table-striped table-hover shadow-sm">
<thead>

<tr>
<th>ID: </th>
<th>Titulo: </th>
<th>Usuario: </th>
<th>Urgencia: </th>
<th>Ubicacion: </th>
<th>Estado: </th>
<th>Fecha Registro: </th>
</tr>
</thead>

<tbody>

{Array.isArray(incidencias) && incidencias.map((i) => (

<tr key={i.id_incidencia}>

<td>{i.id_incidencia}</td>
<td>{i.titulo}</td>
<td>{i.id_usuario}</td>
<td>{i.nivel_urgencia}</td>
<td>{i.ubicacion}</td>
<td>{i.estado}</td>
<td>{i.fecha_registro}</td>


</tr>

))}



</tbody>

</table>

    );
}

export default IncidentList;