import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {};

  return (
    <div>
      <div>
        <h1>Iniciar Sesion</h1>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div>
            <input type="submit" value="Iniciar Sesion" />
          </div>
        </form>
        <Link to={"/nueva-cuenta"} className="">
          Obtener Cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
