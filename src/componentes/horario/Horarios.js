import React, { useState, Fragment, useContext } from "react";
import Horario from "./Horario";
import Swal from 'sweetalert2';
import odontologoAxios from '../../config/axios';
import HorarioOdontologo from './horariosOdontolo';
import {CRMContext} from '../../context/CRMContext';

import { useHistory } from "react-router-dom";
import { useHorariosController } from "./hooksHorarios/useHorariosController";
import Spinner from "../layout/Spinner";
import { Button } from "reactstrap";

import Modal from "react-modal";

function Horarios() {
  const [showHorario, setShowHorario] = useState(false);
  const { push } = useHistory();
  const [auth ] = useContext(CRMContext);
  const { horarios } = useHorariosController();
  if (!horarios.length) return <Spinner />;

  const eliminarHorario = id => {
    Swal.fire({
        title: '¿Estás seguro?',
        text: "Un horario eliminado no se puede recuperar",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3D82DB',
        cancelButtonColor: '#A01C48',
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText : 'No, Cancelar'
    }).then((result) => {
        if (result.value) {
          // eliminar en la rest api
          //console.log("TOKEN_", auth.token)
          odontologoAxios.delete(`/api/horario/delete/${horario._id}`, {
            headers: {
                Authorization: `Bearer ${auth.token}`,
              },
          })
          .then(res => {
            if(!res.data.ok) {
              Swal.fire({
                type: 'error',
                title: 'Hubo un error',
                text: res.data.msg
              })
            } else {
              Swal.fire(
                'Se Elimino correctamente',
                res.data.mensaje,
                'success'
              )
    
            }
            push('/horario');
          }).catch(() => {
          Swal.fire({
            type: 'error',
            title: 'Hubo un error',
            text: 'Intente nuevamente'
          })
        })
      }
    })
}         


  const {_id, fecha, idCupos, idOdontologo} = horario;

  return (
    <Fragment>
      <div className="contenedorTable">
        <div className="tableTitle">
          <h2 id="tableTitle">Horarios</h2>
        </div>

        <div className="tableModel">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Odontologo</th>
                  <th>Cupo</th>
                </tr>
              </thead>
              <tbody>
                {horarios.map((horario) => (
                  <Horario key={horario._id} horario={horario} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="botonVerCitasHoy">
        <Button
          onClick={() => setShowHorario(true)}
          className="btnIcon"
          id="VerHorario"
        >
          Ver citas hoy
        </Button>
      </div>
      <Modal
        isOpen={showHorario}
        onRequestClose={() => setShowHorario(false)}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <HorarioOdontologo
          odontologo={idOdontologo}
          fecha={fecha}
          idHorario={horario._id}
          closeModal={() => setShowHorario(false)}
        />
      </Modal>
    </Fragment>
  );
}
export default Horarios;
