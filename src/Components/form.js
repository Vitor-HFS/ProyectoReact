import {useState} from "react"


function Form (props){

const envioFormulario = (event)=>{
            event.preventDefault();
            const form = event.target;
            props.agregarIncidencia(
            form.titulo.value,
            form.Descripcion.value,
            form.opcion.value,
            form.nivel.value,
            form.ubicacion.value,
            form.usuario.value
            
    );
 };

    
        return (
            <div className="card p-4">
                <h2 className="card-title mb-4 text-center">Registrar Incidencias</h2>
                <form onSubmit={envioFormulario}>

                 {/* Titulo incidencia */}

                    <div>

                        <label className="mb-3 form-label">Titulo incidencia</label>
                        <input className="mb-3 form-control" type="text" name="titulo" placeholder="Introduce el titulo de la incidencia" required></input><br></br>
                    </div>
                 
                 {/* Usuario */}

                    <div>
                    <label className="mb-3 form-label">Usuario</label>
                    <input className="mb-3 form-control" type="text" name="usuario" required></input><br></br>
                    </div>

                 {/* Descripcion incidencia */}

                 <div>

                    <label className="mb-3 form-label">Descripcion Incidencia</label>
                    <input className="mb-3 form-control" type="text" name="Descripcion" required></input><br></br>

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
            
        )
    }


export default Form;