import React from 'react';
import { useNuevoOdontologoController } from './hooks/useNuevoOdontologoController'
import { OdontologoForm } from './OdontologoForm'

function NuevoOdontologo(){
  const { agregarOdontologo, handleChange, validarOdontologo, odontologo } = useNuevoOdontologoController()

  return (
    <div >
      <h1>Nuevo Odondologo </h1>
      <OdontologoForm
        handleSubmit={agregarOdontologo}
        handleChange={handleChange}
        validarOdontologo={validarOdontologo}
        odontologo={odontologo}
        buttonText="Agregar odontologo"
      />
    </div>
  )
}

export default NuevoOdontologo
