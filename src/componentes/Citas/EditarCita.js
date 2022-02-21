import React from 'react';
import { useEditarCitaController } from './hooksCitas/useEditarCitaController'
import { EditarFormCitas } from './EditarFormCitas'
import { useLocation } from 'react-router-dom';

function EditarCita({}){
  const { state } = useLocation()
  const { filtroTipoCitaYSede, handleChange, validarCita, DatosTipoCita, odontologos, cita } = useEditarCitaController(state.cita)
    console.log("Datos cita",cita);
  return (
    <div >
      <EditarFormCitas
        titulo="Editar Cita"
        handleSubmit={filtroTipoCitaYSede}
        handleChange={handleChange}
        validarSede={validarCita}
        cita={cita}
        buttonText="Buscar"
        odontologos={odontologos}
        DatosTipoCita={DatosTipoCita}
      />
    </div>
  )
}

export default EditarCita