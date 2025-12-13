import React, { useContext } from "react";
import { UserManagementContext } from '../UserManagementContext';

function MiLista() {
  const { incidencias } = useContext(UserManagementContext);

  return (
    <div className='container mt-3'>
      <dl>
        {incidencias.map((i) => (
          <React.Fragment key={i.id_incidencia} className="mb-4 pb-2 border-bottom">
            <dt><strong>Titulo: </strong>{i.titulo}</dt>
            <dd><strong>id_incidencia: </strong>{i.id_incidencia}</dd>
            <dd><strong>Descripcion: </strong>{i.descripcion}</dd>
            <dd><strong>Usuario: </strong>{i.id_usuario}</dd>
            <dd><strong>Urgencia: </strong>{i.nivel_urgencia}</dd>
            <dd><strong>Ubicacion: </strong>{i.ubicacion}</dd>
            <dd><strong>Estado: </strong>{i.estado}</dd>
            <dd><strong>Fecha: </strong>{i.fecha_registro}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  );
}

export default MiLista;
