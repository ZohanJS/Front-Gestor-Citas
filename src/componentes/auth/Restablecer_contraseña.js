import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";

import "./Restablecer_contraseña.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

function Restablecer_contraseña(props) {
  const [estadoModal1, cambiarEstadoModal1] = useState(true);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);

  return (
    <div>
      <div className="containerRestablecer">
        <div className="containerRestablecer2">
          <h2 className="restablecerTitle">Restablecer Contraseña</h2>
          <div className="containerRestablecer3">
            <div className="modalRestablecer">
              <FontAwesomeIcon
                icon={faTooth}
                className="logoRestablecer"
              ></FontAwesomeIcon>
              <Modal
                estado={estadoModal1}
                titulo="Ingresa tu correo electrónico para restablecer tu contraseña"
                mostrarInput={true}
                mostrarEnlace={false}
              >
				  <BotonesRestablecer>
                <BtnRestablecer
                  className="btn btn-primary"
                  id="btnrest1"
                  onClick={() => props.history.push("/iniciar-sesion")}
                >
                  Cancelar
                </BtnRestablecer>
                <BtnRestablecer
                  type="submit"
                  className="btn btn-primary"
                  id="btnrest2"
                  onClick={() =>
                    cambiarEstadoModal1(false) & cambiarEstadoModal2(true)
                  }
                >
                  Aceptar
                </BtnRestablecer>
              </BotonesRestablecer>
			  </Modal>
              <Modal
                estado={estadoModal2}
                titulo="Enviamos un link a tu correo para restablecer la contraseña"
                mostrarInput={false}
                mostrarEnlace={true}
              ></Modal>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Restablecer_contraseña;

const BotonesRestablecer = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BtnRestablecer = styled.button`
  margin-top: 3%;
  width: 40%;
`;
