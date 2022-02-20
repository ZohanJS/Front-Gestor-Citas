import React from 'react';
import { HistorialForm } from './HistorialForm'
import { useNuevoHistorlalController } from './hooksHistorial/useNuevoHistorialController';

function NuevoHistorial(){
  const { agregarHistorial, handleChange, validarHistorial, historial } = useNuevoHistorlalController()

  return (
    <div >
      <HistorialForm
        titulo="Nuevo Historial"
        handleSubmit={agregarHistorial}
        handleChange={handleChange}
        validarSede={validarHistorial}
        historial={historial}
        buttonText="Agregar Historial"
      />
    </div>
  )
}

export default NuevoHistorial
