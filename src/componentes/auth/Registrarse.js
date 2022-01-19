import React, { useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import "./Registrarse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";
import odontologoAxios from "../../config/axios";

function Registrarse(props) {

  const [credenciales, guardarCredenciales] = useState({});

  const registrarse = async (e) => {
    e.preventDefault();

    try {
      odontologoAxios.post(
        "/api/auth/create",
        credenciales
      );

      Swal.fire(
        "Registro Correcto",
        "Serás redirijido(a) al inicio de sesión.",
        "success"
      );
      props.history.push("/iniciar-sesion");
    } catch (error) {
      Swal.fire({
        type: "Error",
        title: "No se pudo registrar con éxito tu info :(",
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
    <div className="containerRegistro">
      <form className="containerRegistro2" onSubmit={registrarse}>
        <div>
          <h4>Registrarse</h4>
          <div className="grillaRegistro">
            <div>
              <label>Nombres: </label>
              <input
                type="text"
                name="nombre"
                required
                /* onChange={} */
                className="form-control us-cn"
              />
            </div>

            <div>
              <label>Apellidos: </label>
              <input
                type="text"
                name="apellido"
                required
                /* onChange={} */
                className="form-control us-cn"
              />
            </div>

            <div>
              <label>E-mail: </label>
              <input
                type="email"
                name="email"
                required
                /* onChange={} */
                className="form-control us-cn"
                autocomplete="off"
              />
            </div>

            <div>
              <label>Teléfono: </label>
              <input
                type="number"
                name="telefono"
                required
                /* onChange={} */
                className="form-control us-cn"
                autocomplete="off"
              />
            </div>

            <div>
              <label>Tipo de identificación: </label>
              {/* <input
                type="dropdown"
                name="tipo_id"
                required
                /* onChange={} 
                className="form-control us-cn"
                autocomplete="off"
              /> */}
              <select id="inputState" class="form-control us-cn selectRegistro">
                <option selected>Elige...</option>
                <option>Cédula de ciudadania</option>
                <option>Cédula de extranjería</option>
                <option>Pasaporte</option>
              </select>
            </div>

            <div>
              <label>Número de identificación: </label>
              <input
                type="text"
                name="numero_id"
                required
                /* onChange={} */
                className="form-control us-cn"
                autocomplete="off"
              />
            </div>

            <div>
              <label>Fecha de nacimiento: </label>
              <input
                type="date"
                name="fecha"
                required
                /* onChange={} */
                className="form-control us-cn"
                autocomplete="off"
              />
            </div>

            <div>
              <label>Especialización: </label>
              <select class="form-control us-cn selectRegistro">
                <option selected>Elige...</option>
                <option>Sistemas</option>
                <option>Odontología</option>
                <option>Arroz con leche</option>
              </select>
            </div>

            <div>
              <label>Contraseña: </label>
              <input
                type="password"
                name="contra"
                required
                /* onChange={} */
                className="form-control us-cn"
                autocomplete="new-password"
              />
            </div>

            <div>
              <label>Repite la contraseña: </label>
              <input
                type="password"
                name="repite_contra"
                required
                /* onChange={} */
                className="form-control us-cn"
                autocomplete="nope"
              />
            </div>
          </div>
        </div>
        <div className="botoneraRegistro">
          <FontAwesomeIcon
            icon={faTooth}
            className="logoRegistro"
          ></FontAwesomeIcon>
          <div className="botonesRegistro">
            <div className="tratamientodedatos">
              <input type="checkbox" className=" "></input>
              <label>
                Acepto el tratamiento de datos por parte de la entidad para que
                maneje mi información.
              </label>
            </div>
            <input
              type="submit"
              className="btn_registro btn btn-primary"
              value="Continuar"
              onClick={leerDatos}
            ></input>
            <input
              type="button"
              className="btn_registro btn btn-primary btn2registro"
              onClick={() => props.history.push("/iniciar-sesion")}
              value="Iniciar sesión"
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
export default withRouter(Registrarse);
