import React from 'react';
import { useEditarOdontologoController } from './hooks/useEditarOdontologoController'
import { OdontologoForm } from './OdontologoForm'
import { useLocation } from 'react-router-dom' 
function EditarOdontologo({}){
    const { state }  = useLocation()
    const { editarOdontologo, handleChange, validarOdontologo, odontologo } = useEditarOdontologoController(state.odontologo)
    
    return (
      <div className="">
        <h1>Editar Odontologo </h1>
        <OdontologoForm
          handleSubmit={editarOdontologo}
          handleChange={handleChange}
          validarOdontologo={validarOdontologo}
          odontologo={odontologo}
          buttonText="Editar odontologo"
        />
      </div>
    )
}

export default EditarOdontologo
