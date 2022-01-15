import React from 'react';
import { useEditarOdontologoController } from './hooks/useEditarOdontologoController'
import { OdontologoForm } from './OdontologoForm'

function EditarOdontologo({ currentOdontologo }){
    const { editarOdontologo, handleChange, validarOdontologo, odontologo } = useEditarOdontologoController(currentOdontologo)

    return (
      <div className="editar-odontolog">
        <h1>Editar </h1>
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
