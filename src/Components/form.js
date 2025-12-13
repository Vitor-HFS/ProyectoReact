import React, { useContext } from "react";
import { UserManagementContext } from '../UserManagementContext';

function Form() {
  const { agregarIncidencia } = useContext(UserManagementContext);

  const envioFormulario = (event) => {
    event.preventDefault();
    const form = event.target;

    // Construimos el objeto con los datos del formulario
    const nuevaIncidencia = {
      titulo: form.titulo.value,
      descripcion: form.Descripcion.value,
      categoria: form.opcion.value,
      nivel_urgencia: form.nivel.value,
      ubicacion: form.ubicacion.value,
      id_usuario: form.email.value,
    };

   
    agregarIncidencia(nuevaIncidencia);

    
    form.reset();
  };

  return (
    <div className="card p-4">
      <h2 className="card-title mb-4 text-center">Registrar Incidencias</h2>
      <form onSubmit={envioFormulario}>
        {/* Titulo incidencia */}
        <div>
          <label className="mb-3 form-label">Titulo incidencia</label>
          <input
            className="mb-3 form-control"
            type="text"
            name="titulo"
            placeholder="Introduce el titulo de la incidencia"
            required
          />
        </div>

        {/* Usuario */}
        <div>
          <label className="mb-3 form-label">Usuario</label>
          <input
            className="mb-3 form-control"
            type="email"
            name="email"
            required
          />
        </div>

        {/* Descripcion incidencia */}
        <div>
          <label className="mb-3 form-label">Descripcion Incidencia</label>
          <input
            className="mb-3 form-control"
            type="text"
            name="Descripcion"
            required
          />
        </div>

        {/* Categoria */}
        <div>
          <label className="mb-3 form-label">Categoria: </label>
          <select className="mb-3 form-control" name="opcion" required>
            <option value="">Seleccionar...</option>
            <option>Hardware</option>
            <option>Software</option>
            <option>Conectividad</option>
            <option>Usuario</option>
            <option>Infraestructura</option>
          </select>
        </div>

        {/* Urgencia */}
        <div>
          <label className="mb-3 form-label">Nivel de urgencia:</label>
          <select className="mb-3 form-control" name="nivel" required>
            <option value="">Seleccione...</option>
            <option>Alta</option>
            <option>Media</option>
            <option>Baja</option>
          </select>
        </div>

        {/* Ubicación */}
        <div>
          <label className="mb-3 form-label">Ubicación:</label>
          <input
            className="mb-3 form-control"
            type="text"
            name="ubicacion"
            placeholder="Ej: B265"
            required
          />
        </div>

        {/* Botón */}
        <button type="submit" className="btn btn-success mx-auto d-grid">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default Form;
