import React, { useState, useContext } from "react";
import { withRouter} from "react-router-dom";
import "./Registrarse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

function Registrarse(props) {
  return (
    <div className="containerRegistro">
    
      <div className="containerRegistro2">
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
            />
          </div>

          <div>
            <label>Tipo de identificación: </label>
            <input
              type="dropdown"
              name="tipo_id"
              required
              /* onChange={} */
              className="form-control us-cn"
            />
          </div>

          <div>
            <label>Número de identificación: </label>
            <input
              type="text"
              name="numero_id"
              required
              /* onChange={} */
              className="form-control us-cn"
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
            />
          </div>

          <div>
            <label>Especialización: </label>
            <input
              type="text"
              name="especializacion"
              required
              /* onChange={} */
              className="form-control us-cn"
            />
          </div>

          <div>
            <label>Contraseña: </label>
            <input
              type="password"
              name="contra"
              required
              /* onChange={} */
              className="form-control us-cn"
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
            />
          </div>
        </div>
        </div>
        <div className="botoneraRegistro">
        <FontAwesomeIcon icon={ faTooth} className="logoRegistro"></FontAwesomeIcon>
        <div className='botonesRegistro'>
            <input type="submit" className="btn_registro btn btn-primary" value="Continuar"></input>
            <input type="button" className="btn_registro btn btn-primary btn2registro" onClick={()=> props.history.push("/iniciar-sesion")} value="Iniciar sesión"></input>
         </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Registrarse);
