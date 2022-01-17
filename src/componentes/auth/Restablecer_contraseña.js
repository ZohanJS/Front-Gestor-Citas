import React from "react";
import { withRouter } from "react-router-dom";
import "./Restablecer_contraseña.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

function Restablecer_contraseña(props) {
    
  return (
    <div className="containerRestablecer">
      <div className="containerRestablecer2">
        <h2 className="restablecerTitle">Restablecer Contraseña</h2>
        <div className="containerRestablecer3">
          <div className="inputrestablecer">
            <FontAwesomeIcon
              icon={faTooth}
              className="logoRestablecer"
            ></FontAwesomeIcon>
            <h3 className="titleinput">
              Ingresa tu correo electrónico para restablecer tu contraseña
            </h3>
            <h3 className="titleinput" id="titlehide">
              Ingresa tu correo electrónico para restablecer tu contraseña
            </h3>
            <input
              type="email"
              name="email"
              required
              className="form-control"
              placeholder="name@example.com"
            />
            <a className="reenviarCodigo" href="" value="Reenviar código nuevo">Reenviar correo</a>
            <div className="botonesRestablecer">
              <input
                type="button"
                className="btn_restablecer btn btn-primary"
                id="btnrest1"
                value="Cancelar"
                onClick={() => props.history.push("/iniciar-sesion")}
              ></input>
              <input
                type="submit"
                className="btn_restablecer btn btn-primary"
                id="btnrest2"
                value="Aceptar"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Restablecer_contraseña);
