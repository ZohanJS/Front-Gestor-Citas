import {useContext, useState} from "react";
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2';
import odontologoAxios from '../../../config/axios';
import {CRMContext} from '../../../context/CRMContext';

const initialValue = {
  idCliente: '',
  idHorario: '',
  idSede: '',
  idCupo :'',
  idOdontologo: '',
  tipoCita: ''
}
const ConsultaTipoCita = {
  idTipoCita: '',
  idSede: ''
}
const ConsultaOdonto=
{
  idOdontologo:''  
}

export function useNuevaCitaController() {
  const { push } = useHistory()
  const [auth ] = useContext(CRMContext );
  // console.log("toke nueva cita: ",auth);
  const[cita, guardarCita] = useState(initialValue);
  const[odontologos, guardarOdontologo] = useState([]);
  const[DatosTipoCita, FiltrarDatosTipoCita] = useState(ConsultaTipoCita);
  const[DatosOdonto, FiltrarDatosOdonto] = useState(ConsultaOdonto);
  const[horarios, guardarHorarios] = useState([]);
  
  

  function handleChange(event) {
    FiltrarDatosTipoCita({
      ...DatosTipoCita,
      [event.target.name] : event.target.value
    })
  }
  

  function agregarCita(event) {
    event.preventDefault();
    // console.log(cita)
    odontologoAxios.post('/api/cita/create', cita, {
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
            guardarCita(initialValue)
          Swal.fire(
            'Se agregó la cita',
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
  
  const consultaTipoCita = async()=>{
  
    const respuesta=await odontologoAxios.post('/api/filtros/tipocita', DatosTipoCita, {
      headers: {
        Authorization: `Bearer ${auth.token}`,
      },
    })
    // console.log("Respuesta Data",respuesta.data);
    guardarOdontologo(respuesta.data["listaOdonto"]);
    
    };

    const consultaOdonto = async()=>{
  
      const respuesta=await odontologoAxios.post('/api/filtros/odonto', DatosOdonto, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      guardarHorarios(respuesta.data["horario"]);
      
      };
    
    
    function filtroTipoCitaYSede(event) {
      event.preventDefault();
      consultaTipoCita();
    }

    function filtroOndont ()
    {
      consultaOdonto();
    }

  //console.log("Filtro Odontologo", odontologoFiltro);
  function validarCita() {
    const {idCliente, idHorario, idSede, idCupo, idOdontologo, tipoCita} = cita;
    return !idCliente.length || !idHorario.length || !idSede.length || !idCupo.length || !idOdontologo.length || !tipoCita.length;
  }

  if(!auth.auth && (localStorage.getItem('token') === auth.token ) ) {
    push('/iniciar-sesion');
  }

  return {handleChange, agregarCita, validarCita, filtroTipoCitaYSede, filtroOndont, DatosTipoCita, horarios, odontologos,cita}
}
