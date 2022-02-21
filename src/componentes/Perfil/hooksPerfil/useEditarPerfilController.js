import {useContext, useState} from "react";
import {useHistory} from 'react-router-dom';
import Swal from 'sweetalert2';
import odontologoAxios from '../../../config/axios';
import {CRMContext} from '../../../context/CRMContext';


export function useEditarPerfilController(currentPerfil) {
  const { push } = useHistory()
  const [auth ] = useContext(CRMContext);
  const[perfil, guardarPerfil] = useState({
    ...currentPerfil,
  });

  if(auth.rol === "usuario" || auth.rol === "administrador" ){
    var url = `/api/auth/update/${auth.uid}`;
    // var key = "usuario";
  }
  else{
    var url = `/api/odontologo/update/${auth.uid}`;
   // var key = "odontologo";
  }

  function handleChange(event) {
    guardarPerfil({
      ...perfil,
      [event.target.name] : event.target.value
    })
  }

  function editarPerfil(event) {
    event.preventDefault();
    odontologoAxios.put(url, perfil, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
      .then(res => {
        if(!res.data.ok) {
            console.log(res.data);
          Swal.fire({
            type: 'error',
            title: 'Hubo un error',
            text: res.data.msg
          })
        } else {
          Swal.fire(
            'Su perfil ha sido actualizado',
            res.data.mensaje,
            'success'
          )

        }
        push('/perfil');
      }).catch(() => {
      Swal.fire({
        type: 'error',
        title: 'No se pudo actualizar el perfil, por menso',
        text: 'Intentelo nuevamente'
      })
      push('/perfil');
    })
  }

  if(!auth.auth && (localStorage.getItem('token') === auth.token ) ) {
    push('/iniciar-sesion');
  }

  return {handleChange,  editarPerfil, perfil}
}
