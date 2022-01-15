import React from 'react';

export function OdontologoForm({ handleSubmit, handleChange, validarOdontologo, odontologo, buttonText }){
  return (
    <form onSubmit={handleSubmit}>
      <legend>Llena todos los campos</legend>
      <div className="input-group">
        <label>Nombres:</label>
        <input value={odontologo.nombre} type="text" placeholder="Nombres" name="nombre" onChange={handleChange} />
      </div>
      {/*<select>
        {sedes.map(sede => <option value={sede.id}>{sede.nombre}</option>)}
      </select>*/}
      <div className="input-group">
        <label>Apellidos:</label>
        <input value={odontologo.apellidos} type="text" placeholder="Apellidos" name="apellidos" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label>Teléfono:</label>
        <input value={odontologo.telefono} type="text" placeholder="Teléfono" name="telefono" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label>Número Documento:</label>
        <input value={odontologo.documento} type="text" placeholder="Documento" name="documento" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label>Fecha de nacimiento:</label>
        <input value={odontologo.fechaNacimiento} type="date" placeholder="Fecha de nacimiento" name="fechaNacimiento" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label>Email:</label>
        <input value={odontologo.email} type="email" placeholder="Email" name="email" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label>Contraseña:</label>
        <input value={odontologo.password} type="password" placeholder="Contraseña" name="password" onChange={handleChange} />
      </div>
      <div className="input-group">
        <label>Especialización:</label>
        <input value={odontologo.idEspecializacion} type="text" placeholder="id especialización" name="idEspecializacion" />
      </div>
      <div className="input-group">
        <label>Sede:</label>
        <input value={odontologo.idSede} type="text" placeholder="id sede" name="idSede" />
      </div>
      <div className="enviar">
        <button className="btn btn-azul" disabled={validarOdontologo}>{buttonText}</button>
      </div>
    </form>
  )
}

