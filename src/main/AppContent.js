// AppContent.js
import React, { useContext, useEffect, useState } from "react";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Form from '../Components/form.js';
import MiLista from '../Components/Milista.js';
import IncidentList from '../Components/IncidentList';
import { UserManagementContext } from '../UserManagementContext';
import Fondo from "../IMG/Fondo.jpg";

function AppContent() {
  const INCIDENCIA_API_URL = 'https://localhost:3004/incidencias';
  const USUARIO_API_URL = 'https://localhost:3004/users';
  const [usuarios, setUsuarios] = useState([]);
  const [incidencias, setIncidencias] = useState([]);


  useEffect(() => {
    const obtenerIncidencias = async () => {
      try {
        const response = await fetch(INCIDENCIA_API_URL);
        if (!response.ok) throw new Error("HTTP Error");
        const data = await response.json();
        console.log("Incidencias desde API:", data);
      } catch (e) {
        console.error("Error al cargar las incidencias ", e);
      }
    };

    const obtenerUsuario = async () => {
      try {
        const response = await fetch(USUARIO_API_URL);
        if (!response.ok) throw new Error("HTTP Error");
        const data = await response.json();
        console.log("Usuarios desde API:", data);
        setUsuarios(data);
      } catch (e) {
        console.error("Error al cargar los usuarios ", e);
      }
    };

    obtenerIncidencias();
    obtenerUsuario();

  }, []);

   const agregarIncidencias = async (
   

    titulo_nuevo,
    usuario_nuevo,
    descripcion_nuevo,
    categoria_nuevo,
    nivelurgencia_nuevo,
    ubicacion_nuevo
  ) => {
    try {
      const fecha = new Date();
      const year = fecha.getFullYear();
      const month = String(fecha.getMonth() + 1).padStart(2, '0');
      const day = String(fecha.getDate()).padStart(2, '0');
      const fecha_formateada = `${year}-${month}-${day}`;

      let usuarioEncontrado = usuarios.find((u) => u.email === usuario_nuevo);
      if (usuarioEncontrado) {
        const nueva_incidencia = {
          usuario: usuarioEncontrado,
          titulo: titulo_nuevo,
          descripcion: descripcion_nuevo,
          categoria: categoria_nuevo,
          nivelurgencia: nivelurgencia_nuevo,
          ubicacion: ubicacion_nuevo,
          fecha_registro: fecha_formateada,
          estado: "abierta",
          comentarios: []
        };

        let response = await fetch(INCIDENCIA_API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(nueva_incidencia)
        });

        if (response.ok) {
          let data = await response.json();
          console.log("Incidencia creada:", data);
          setIncidencias([...incidencias, data]);
        } else {
          throw new Error(`Fallo la petición POST. Estado HTTP: ${response.status}`);
        }
      } else {
        throw new Error("Error al crear incidencia. Usuario no encontrado");
      }
    } catch (e) {
      console.error("Fallo la petición POST de la incidencia", e.message);
    }
  };
  

  return (
    <div className="card" style={{
      backgroundImage: `url(${Fondo})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    }}>
      <div className='container-fluid mt-4 row'>
        <Header />
        <main className="col-md-7">
          <p>Esta aplicación muestra el contenido de mi app:</p>
          <div className="card p-4">
           <IncidentList incidencias={incidencias} />
          </div>
        </main>
        <aside className="col-md-5">
          {/* El Form ya usa el contexto, no hace falta pasar props */}
          <Form agregarIncidencia={agregarIncidencias} />
        </aside>
        <Footer />
      </div>
    </div>
  );
}

export default AppContent;
