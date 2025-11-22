import React, { useState } from 'react';

// 1. Crear el Contexto
export const UserManagementContext = React.createContext(null);

// 2. Crear el Provider que contendrá la lógica y el estado
export const UserManagementProvider = ({ children }) => {
    // Estado de ejemplo para las incidencias (debe ser un array)
    const [incidencias, setIncidencias] = useState([
        // Ponga aquí los datos iniciales si los tiene, o un array vacío
        // Ejemplo de estructura de datos:
        // { id: 1, titulo: "Fallo de red", usuario: "user1" }
    ]);

    // El valor que se comparte con los componentes que lo usan
    const contextValue = {
        incidencias, // El componente IncidentList está buscando esta propiedad
        setIncidencias // Función para actualizar el estado
    };

    return (
        <UserManagementContext.Provider value={contextValue}>
            {children}
        </UserManagementContext.Provider>
    );
};
