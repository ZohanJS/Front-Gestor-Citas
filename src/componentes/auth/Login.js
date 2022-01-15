import React, { useState, useContext } from "react";
import './Login.css';

import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import odontologoAxios from "../../config/axios";
import './Login.css';

import { CRMContext } from "../../context/CRMContext";

function Login(props) {
  const [auth, guardarAuth] = useContext(CRMContext);
  const [credenciales, guardarCredenciales] = useState({});

  const iniciarSesion = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await odontologoAxios.post(
        "/api/auth/login",
        credenciales
      );
      const { token } = respuesta.data;
      localStorage.setItem("token", token);

      guardarAuth({
        token,
        auth: true,
      });

      Swal.fire("Login Correcto", "Has iniciado Sesión", "success");
      props.history.push("/");
    } catch (error) {
      Swal.fire({
        type: "error",
        title: "Hubo un error",
        text: error.response.data.mensaje,
      });
    }
  };

  const leerDatos = (e) => {
    guardarCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="containerPrincipal">
      <h2 className="is">Iniciar Sesión</h2>
        <form onSubmit={iniciarSesion}
        className="form form-group">
        <div className="containerSecundario">
          <label>Usuario: </label>
          <input
            type="text"
            name="email"
            placeholder="Ingresa tu usuario"
            required
            onChange={leerDatos}
            className="form-control us-cn"
          />

          <label>Contraseña: </label>
          <input
            type="password"
            name="password"
            placeholder="***********"
            required
            onChange={leerDatos}
            className="form-control us-cn"
          />
          <a className="restablecer_login" href="#">Restablecer contraseña</a>
          </div>
          <div className='botones'>
            <input type="submit" className="btn_login btn btn-primary" value="Entrar"></input>
            <input type="button" className="btn_login btn btn-primary btn2" onClick={()=> alert("Te estás dirigiendo a la pantalla de registro")} value="Crear cuenta"></input>
         </div>
        </form>
    </div>
  );
}

export default withRouter(Login);
