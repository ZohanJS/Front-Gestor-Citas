import React, {useState} from 'react';
import Swal from 'sweetalert2';
import './tables.css';
import odontologoAxios from '../../config/axios';
import {Button} from 'reactstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import EditarOdontologo from "./EditarOdontologo";
import { useHistory } from "react-router-dom";

function Odontologo({ odontologo }) {
  const [showOdontologo, setShowOdontologo] = useState(false)
  const { nombre, apellidos, email, telefono, _id } = odontologo;
  const { push } = useHistory()

  const eliminarOdontologo = () => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: "Un odontologo eliminado no se puede recuperar",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3D82DB',
      cancelButtonColor: '#A01C48',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        // Llamado a axios
        odontologoAxios.delete(`/odontologos/${_id}`)
          .then(res => {
            Swal.fire(
              'Eliminado',
              res.data.mensaje,
              'success'
            );
          });

      }
    });
  };

  return (
    <tr>
      <td>{nombre} {apellidos}</td>
      <td>{email}</td>
      <td>{telefono}</td>
      <td>0</td>
      <td>0</td>
      <td>
        <div>
          <Button onClick={eliminarOdontologo} className="btnIcon" id="delete"><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></Button>
          <Button onClick={() => push('/odontologos/editar', { odontologo })} className="btnIcon" id="edit"><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></Button>
        </div>
      </td>
    </tr>

  )
}
export default Odontologo;
