import React from 'react';
import { useNuevaCitaController } from './hooksCitas/useNuevaCitaController'
import { CitaForm } from './CitaForm'

function NuevaCita(){
  const { filtroTipoCitaYSede, handleChange, validarCita, DatosTipoCita, odontologos, cita } = useNuevaCitaController()

  return (
    <div >
      <CitaForm
        titulo="Nueva Cita"
        handleSubmit={filtroTipoCitaYSede}
        handleChange={handleChange}
        validarSede={validarCita}
        sede={cita}
        buttonText="Buscar"
        odontologos={odontologos}
        DatosTipoCita={DatosTipoCita}
      />
    </div>
  )
}

export default NuevaCita
