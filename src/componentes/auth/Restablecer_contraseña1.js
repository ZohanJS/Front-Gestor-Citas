import React, { useState, useContext } from "react";
import Modal from "./Modal";
import styled from "styled-components";

import "./Restablecer_contraseña.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

import odontologoAxios from "../../config/axios";
import Swal from "sweetalert2";

function Restablecer_contraseña(props) {
  const [estadoModal1, cambiarEstadoModal1] = useState(true);
  const [estadoModal2, cambiarEstadoModal2] = useState(false);

  const [texto, setTexto] = useState("");

  const handleInputChange = ({ target }) => {
    setTexto(target.value);
  };

  const registrarse = async (e) => {
    e.preventDefault();
    try {
      odontologoAxios.post("/api/auth/create", credenciales);

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
    cambiarEstadoModal1(false);
    cambiarEstadoModal2(true);
  };

  return (
    <div>
      <div className="containerRestablecer">
        <div className="containerRestablecer2">
          <h2 className="restablecerTitle">Restablecer Contraseña</h2>
          <form className="containerRestablecer3" onSubmit={registrarse}>
            <div className="modalRestablecer">
              <FontAwesomeIcon
                icon={faTooth}
                className="logoRestablecer"
              ></FontAwesomeIcon>
              <Modal
                estado={estadoModal1}
                titulo="Ingresa tu correo electrónico para restablecer tu contraseña"
                mostrarInput={true}
                cambiarValor={handleInputChange}
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
                  <input
                    type="submit"
                    className="BtnRestablecer btn btn-primary"
                    id="btnrest2"
                    value="Aceptar"
                  />
                </BotonesRestablecer>
              </Modal>
              <Modal
                estado={estadoModal2}
                titulo="Enviamos un link a tu correo para restablecer la contraseña"
                mostrarInput={false}
                mostrarEnlace={true}
              ></Modal>
            </div>
          </form>
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
