import { useContext } from "react";
import { UserManagementContext } from '../UserManagementContext';

function IncidentList() {
  const { incidencias } = useContext(UserManagementContext);

  return (
    <table className="table table-striped table-hover shadow-sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Email</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Categoría</th>
          <th>Urgencia</th>
          <th>Ubicación</th>
          <th>Estado</th>
          <th>Fecha Reg</th>
        </tr>
      </thead>
      <tbody>
        {Array.isArray(incidencias) && incidencias.map((i) => (
          <tr key={i.id_incidencia}>
            <td>{i.id_incidencia}</td>
            <td>{i.id_usuario}</td>
            <td>{i.titulo}</td>
            <td>{i.descripcion}</td>
            <td>{i.categoria}</td>
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
