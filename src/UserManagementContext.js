import React, { createContext, useState } from "react";

export const UserManagementContext = createContext(null);

export const UserManagementProvider = ({ children }) => {
  const [incidencias, setIncidencias] = useState([]);
  const [usuarios, setUsuarios] = useState([]); // lista de usuarios

  const agregarIncidencia = (datos) => {
    const fecha = new Date().toISOString().split('T')[0];
    const contextValue = {
      incidencias,
      agregarIncidencia,
      usuarios,
      setUsuarios
    };
    const usuarioEncontrado = usuarios.find((u) => u.email === datos.id_usuario);
    // si no existe, igual crea la incidencia
const usuarioFinal = usuarioEncontrado || { email: datos.id_usuario };


    const nueva_incidencia = {
      id_incidencia: incidencias.length + 1,
      titulo: datos.titulo,
      descripcion: datos.descripcion,
      categoria: datos.categoria,
      nivel_urgencia: datos.nivel_urgencia,
      ubicacion: datos.ubicacion,
      id_usuario: datos.id_usuario,
      fecha_registro: fecha,
      estado: "abierto"
    };

    setIncidencias(prev => [...prev, nueva_incidencia]);
    console.log("Incidencia agregada:", nueva_incidencia);
  };

  const contextValue = {
    incidencias,
    agregarIncidencia,
    usuarios,
    setUsuarios // para que AppContent pueda cargar usuarios
  };

  return (
    <UserManagementContext.Provider value={contextValue}>
      {children}
    </UserManagementContext.Provider>
  );
};

