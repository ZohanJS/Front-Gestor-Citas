import React,{useContext} from 'react';

import Swal from 'sweetalert2';
import odontologoAxios from '../../config/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";
import {CRMContext} from '../../context/CRMContext';

function Cita({ cita }) {
    const { push } = useHistory()
    const [auth ] = useContext(CRMContext);
    const eliminarCita = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Una cita eliminada no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3D82DB',
            cancelButtonColor: '#A01C48',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: 'No, Cancelar'
        }).then((result) => {
            if (result.value) {
                odontologoAxios.delete(`/api/cita/delete/${id}`, {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                    },
                })
                    .then(res => {
                        if (res.status === 200) {
                            if (res.data.ok) {
                                Swal.fire(
                                    'Eliminada',
                                    res.data.msg,
                                    'success'
                                )
                            }
                            else {
                                Swal.fire(
                                    'Error',
                                    res.data.msg,
                                    'error'
                                )
                            }

                        }
                    })
            }
        })
    }

    const { _id, idHorario, idSede, idCupo, tipoCita } = cita;

    return (
        <tr className="cita">
            <td className="fecha">{idHorario.fecha}</td>
            <td className="hora">{idCupo.horaInicio}</td>
            <td className="tipoCita">{tipoCita.nombre}</td>
            <td className="sede">{idSede.nombre}</td>
            {/* <td className="estado">{(estado)?"Activa":"Inactiva"}</td> */}
            <td>
                <div>
                    <Button onClick={() => eliminarCita(_id)} className="btnIcon" id="delete"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button>                    
                </div>
            </td>
            <td><Button onClick={() => push(`/historial/${_id}`)} className="btnIcon" id="edit"><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></Button></td>
        </tr>
    )
}
export default Cita;