import {useContext, useState} from "react";
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2';
import odontologoAxios from '../../../config/axios';
import {CRMContext} from '../../../context/CRMContext';
import { useParams } from "react-router-dom";


const initialValue = {  
  observacion:'',  
  fecha: ''
}

export function useNuevoHistorlalController() {
  const { push } = useHistory()
  const [auth ] = useContext(CRMContext );
  const {idCita}  = useParams();
  const[historial, guardarHistorial] = useState(initialValue);

  function handleChange(event) {
    guardarHistorial({
      ...historial,
      [event.target.name] : event.target.value
    })
  }

  function agregarHistorial(event) {
    event.preventDefault();
    console.log(historial)
    odontologoAxios.post('/api/observacion/create', {...historial, idCita}, {
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
          guardarHistorial(initialValue)
          Swal.fire(
            'Se agregó el Historial',
            res.data.mensaje,
            'success'
          )
          push('/citasOdondologo');
        }        
      }).catch(() => {
      Swal.fire({
        type: 'error',
        title: 'Hubo un error',
        text: 'Intente nuevamente'
      })
    })
  }

  function validarHistorial() {
    const {idCita, observacion, fecha} = historial;
    return !idCita.length || !observacion.length || !fecha.length ;
  }

  if(!auth.auth && (localStorage.getItem('token') === auth.token ) ) {
    push('/iniciar-sesion');
  }

  return {handleChange, validarHistorial, agregarHistorial, historial}
}
