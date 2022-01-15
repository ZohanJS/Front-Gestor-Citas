import React, { useState, useContext } from "react";
import './Login.css';

import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";
import odontologoAxios from "../../config/axios";
import { Link } from "react-router-dom";

// Context
import { CRMContext } from "../../context/CRMContext";

function Login(props) {
  // Auth y token
  const [auth, guardarAuth] = useContext(CRMContext);

  // State con los datos del formulario
  const [credenciales, guardarCredenciales] = useState({});

  // iniciar sesión en el servidor
  const iniciarSesion = async (e) => {
    e.preventDefault();

    // autenticar al usuario

    try {
      const respuesta = await odontologoAxios.post(
        "/api/auth/login",
        credenciales
      );
      console.log(respuesta);
      // extraer el token y colocarlo en localstorage
      const { token } = respuesta.data;
      localStorage.setItem("token", token);

      // colocarlo en el state
      guardarAuth({
        token,
        auth: true,
      });

      // alerta
      Swal.fire("Login Correcto", "Has iniciado Sesión", "success");

      // redireccionar
      props.history.push("/");
    } catch (error) {
      console.log(error);
      Swal.fire({
        type: "error",
        title: "Hubo un error",
        text: error.response.data.mensaje,
      });
    }
  };

  // almacenar lo que el usuario escribe en el state
  const leerDatos = (e) => {
    guardarCredenciales({
      ...credenciales,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="containerPrincipal">
      <h2 className="is">Iniciar Sesión</h2>

      {/* <div className="containerSecundario"> */}
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

          {/* <div className="campo"> */}
          <label>Contraseña: </label>
          <input
            type="password"
            name="password"
            placeholder="***********"
            required
            onChange={leerDatos}
            className="form-control us-cn"
          />
          {/* <Link to={"/odontologos/nuevo"}> */}
          <a className="restablecer_login" href="#">Restablecer contraseña</a>
          {/* </Link> */}
          </div>
          
          {/* <input
            type="submit"
            value="Iniciar Sesión"
            className="btn btn-verde btn-block"
          /> */}
          <div className='botones'>
            <input type="submit" className="btn_login btn btn-primary" value="Entrar"></input>
            <input type="button" className="btn_login btn btn-primary btn2" onClick={()=> alert("Te estás dirigiendo a la pantalla de registro")} value="Crear cuenta"></input>
         </div>
        </form>
      {/* </div> */}
    </div>
  );
}

export default withRouter(Login);
