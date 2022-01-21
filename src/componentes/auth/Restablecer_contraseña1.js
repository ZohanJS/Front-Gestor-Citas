import React, { useState } from "react";
import styled from "styled-components";

import "./Restablecer_contraseña.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

import odontologoAxios from "../../config/axios";
import Swal from "sweetalert2";

function Restablecer_contraseña1(props) {
  /*  const [estadoModal1, cambiarEstadoModal1] = useState(true);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);

  const [texto, setTexto] = useState("");

  const handleInputChange = ({ target }) => {
    setTexto(target.value);
  };

  const restablecer = async (e) => {
    e.preventDefault();
    try {
      odontologoAxios.post("/api/password-reset", {"email":texto});

      Swal.fire(
        "Correo enviado",
        "",
        "success"
      );
      cambiarEstadoModal1(false);
      cambiarEstadoModal2(true);
    } catch (error) {
      Swal.fire({
        type: "Error",
        title: "No se pudo registrar con éxito tu info :(",
        text: error.response.data.mensaje,
      });
    }
    
  };
 */
  return (
    <div>
      <div className="containerRestablecer">
        <div className="containerRestablecer2">
          <h2 className="restablecerTitle">Restablecer Contraseña</h2>
          <form className="containerRestablecer3" /* onSubmit={restablecer} */>
            <div className="modalRestablecer">
              <FontAwesomeIcon
                icon={faTooth}
                className="logoRestablecer1"
              ></FontAwesomeIcon>
              <ContenedorRestablecer>
                <ContenedorModal>
                  <div>
                    <TituloModal>Digita tu nueva contraseña</TituloModal>
                    <input
                      type="password"
                      name="password"
                      required
                      className="form-control"
                      placeholder="contraseña"
                    />
                  </div>
                  <div>
                    <TituloModal>Digita nuevamente tu contraseña</TituloModal>
                    <input
                      type="password"
                      name="password"
                      required
                      className="form-control"
                      placeholder="contraseña"
                    />
                  </div>
                </ContenedorModal>
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
                  >
                    Aceptar
                  </BtnRestablecer>
                </BotonesRestablecer>
              </ContenedorRestablecer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Restablecer_contraseña1;

const ContenedorRestablecer = styled.div`
  display: grid;
  flex-flow: row wrap;
  justify-content: CENTER;
  width: 100%;
  height: 80%;
  grid-template-columns: repeat(2, 1fr);
`;
const ContenedorModal = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  width: 120%;
`;

const BotonesRestablecer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  width: auto;
  margin-top: 65px;
`;

const BtnRestablecer = styled.button`
  border-radius: 10px !important;
  margin-bottom: 30px;
  border: 0 !important;
  text-align: center !important;
  padding: 10px 40px;
  width: 60%;
`;

const TituloModal = styled.h3`
  margin-bottom: 6px;
  margin-top: 30px;
  text-align: left;
  font-size: 1.3vw;
  color: var(--text);
`;
