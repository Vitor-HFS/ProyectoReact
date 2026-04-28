import React, { useState } from "react";

function Login({ onLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const sendFormLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      alert("Por favor, completa todos los campos");
      return;
    }

    onLogin(email, password);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-4 text-center">Acceso a la aplicación</h2>

        <form onSubmit={sendFormLogin}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
    </div>

          <div className="mb-4">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
    </div>

          <button type="submit" className="btn btn-primary w-100"> Entrar </button>
</form>
    </div>
</div>
  );
}

export default Login;