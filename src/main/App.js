import React, { useState, useEffect } from "react";
import { UserManagementProvider } from '../UserManagementContext';
import AppContent from './AppContent';
import Login from "../Components/Login";
import { jwtDecode } from "jwt-decode";

function App() {

 const [usuarioLogueado, setUsuarioLogueado] = useState(null);

useEffect(() => {
  const savedUser = localStorage.getItem('usuarioLogueado');
  if (savedUser) {
    setUsuarioLogueado(JSON.parse(savedUser));
  }
}, []);

  // Nuestro amigo onLogin
  const onLogin = async (email, password) => {
    try {
      const response = await fetch(
        `http://localhost:3004/users?email=${email}&password=${password}`
      );

      const data = await response.json();

      if (data.length > 0) {
        const user = data[0];

        // Guardamos el token
        localStorage.setItem("authToken", user.accessToken || user["accessToken"]);

        setUsuarioLogueado(user);
        alert("Login correcto");
      } else {
        alert("Usuario o contraseña incorrectos");
      }

    } catch (error) {
      console.error("Error:", error);
      alert("Error de conexión");
    }
  };

  //Cerrar Sesión
  const logout = () => {
    localStorage.removeItem('authToken');
    setUsuarioLogueado(null);
  };

  return (
    <UserManagementProvider>
      {!usuarioLogueado ? (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-5">
              <Login onLogin={onLogin} />
            </div>
          </div>
        </div>
      ) : (
        // Sí logueado pues mostrar layout completo ( el main + aside)
        <div className="container-fluid mt-4">
          <div className="row">
            <main className="col-md-7">
              <AppContent usuarioLogueado={usuarioLogueado} />
            </main>
            <aside className="col-md-5">
            </aside>
          </div>
          
        </div>
      )}
    </UserManagementProvider>
  );
}

export default App;