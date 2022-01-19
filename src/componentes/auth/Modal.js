import React from "react";
import styled from "styled-components";

const Modal = ({
  children,
  estado,
  titulo,
  mostrarInput,
  mostrarEnlace,
}) => {
  return (
    <>
      {estado && (
       
          <ModalRestablecer>
            <TituloModal>
                {titulo}
            </TituloModal>
            <InputModal>
              {mostrarInput && (
                <input
                  type="email"
                  name="email"
                  required
                  className="form-control"
                  placeholder="name@example.com"
                />
              )}
            </InputModal>
            <ReenviarCorreo>
              {mostrarEnlace && (
                <a
                  
                  href="#"
                  value="Reenviar código nuevo"
                >
                  Reenviar correo
                </a>
              )}
            </ReenviarCorreo>
            {children}
          </ModalRestablecer>

        
      )}
    </>
  );
};

export default Modal;

const ModalRestablecer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column wrap;
`;

const TituloModal = styled.h3`
  margin-bottom: 30px;
  margin-top: 30px;
  text-align: left;
  font-size: 1.7vw;
`;
const InputModal = styled.div`
  margin-bottom: 1px;
`;

const ReenviarCorreo = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;
