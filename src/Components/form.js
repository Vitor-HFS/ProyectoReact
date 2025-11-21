import {useState} from "react"
import './Form.css'

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
            <div>
                <h2>Registrar Incidencias</h2>
                <form onSubmit={envioFormulario}>

                 {/* Titulo incidencia */}

                    <div className="Elemento-Form">

                        <label>Titulo incidencia</label>
                        <input type="text" name="titulo" placeholder="Introduce el titulo de la incidencia" required></input><br></br>
                    </div>
                 
                 {/* Usuario */}

                    <div className="Elemento-Form">
                    <label>Usuario</label>
                    <input type="text" name="usuario" required></input><br></br>
                    </div>

                 {/* Descripcion incidencia */}

                 <div className="Elemento-Form">

                    <label>Descripcion Incidencia</label>
                    <input type="text" name="Descripcion" required></input><br></br>

                 </div>

                {/* Categoria */}

                <div className="Elemento-Form">

                <label>Categoria: </label>

                <select name="opcion" required>
                <option value="">Seleccionar...</option>
                <option>Hardware</option>
                <option>Software</option>
                <option>Conectividad</option>
                <option>Usuario</option>
                <option>Infraestructura</option>

                </select>

                </div>

                {/* Urgencia */}
                <div className="Elemento-Form">
                <label>Nivel de urgencia:</label>
                <select name="nivel" required>
                    <option value="">Seleccione...</option>
                    <option>Alta</option>
                    <option>Media</option>
                    <option>Baja</option>
                </select>
                </div>

                {/* Ubicación */}
                <div className="Elemento-Form">
                <label>Ubicación:</label>
                <input
                    type="text"
                    name="ubicacion"
                    placeholder="Ej: B265"
                    required
                />
                </div>

                {/* Botón */}
                <button type="submit" className="elemento-form-button">
                Registrar
                </button>

                </form>
            </div>
            
        )
    }


export default Form;