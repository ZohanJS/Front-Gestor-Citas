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

  function horarioSede(hora) {
    let horas = hora.split(':');
    let data = '';
    if(parseInt(horas[0]) < 12) {
      return data = `${hora} AM`
    }
    else{
      if(parseInt(horas[0]) == 12) {
        return data = `${hora} PM`
      } 
      if(parseInt(horas[0]) == 0) {
        return data = `${horas[0]+12}:${horas[1]} AM`
      } 
      return data = `${horas[0]-12}:${horas[1]} PM`
    }
  }

  function editarSede(event) {
    event.preventDefault();
    sede.horario = `${horarioSede(sede.horaInicioSede)} - ${horarioSede(sede.horaFinSede)}`
    console.log(sede);
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
        push('/sedes');
      }).catch(() => {
      Swal.fire({
        type: 'error',
        title: 'Hubo un error',
        text: 'Intente nuevamente'
      })
    })
  }

  function validarSede() {
    const {nombre, direccion, telefono, estado, horaInicioSede, horaFinSede} = sede;
    return !nombre.length || !direccion.length || !telefono.length || !estado.length || !horaInicioSede.length || !horaFinSede.length ;
  }

  if(!auth.auth && (localStorage.getItem('token') === auth.token ) ) {
    push('/iniciar-sesion');
  }

  return {handleChange, validarSede, editarSede, sede}
}
