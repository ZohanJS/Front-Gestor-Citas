import {useContext, useState} from "react";
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';
import odontologoAxios from '../../../config/axios';
import {CRMContext} from '../../../context/CRMContext';


export function useEditarSedeController(currentSede) {
  const { push } = useHistory()
  const [auth ] = useContext(CRMContext);
  const[sede, guardarSede] = useState({
    ...currentSede,
  });

  function handleChange(event) {
    guardarSede({
      ...sede,
      [event.target.name] : event.target.value
    })
  }

  function editarSede(event) {
    event.preventDefault();
    odontologoAxios.put(`/api/sede/update/${currentSede._id}`, sede, {
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
            'Se editó la sede',
            res.data.mensaje,
            'success'
          )

        }
        push('/');
      }).catch(() => {
      Swal.fire({
        type: 'error',
        title: 'Hubo un error',
        text: 'Intente nuevamente'
      })
    })
  }

  function validarSede() {
    const {nombre, direccion, telefono, horario, estado} = sede;
    return !nombre.length || !direccion.length || !telefono.length || !horario.length || !estado.length;
  }

  if(!auth.auth && (localStorage.getItem('token') === auth.token ) ) {
    push('/iniciar-sesion');
  }

  return {handleChange, validarSede, editarSede, sede}
}
