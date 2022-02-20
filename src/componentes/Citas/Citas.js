import React, { Fragment, useState } from "react";
import Cita from "./Cita";
import { useCitasController } from "./hooksCitas/useCitasController";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../layout/Spinner";
import './citas.css'
import { useSedesController } from "../sedes/hooksSedes/useSedesController";
import { useOdontologosController } from "../odontologos/hooks/UseOdontologosController"
import { useTipoCitasController } from "../tipoCitas/hooksTipoCitas/useTipoCitasController"
import { useFiltrarCitas } from "../Citas/hooksCitas/useFiltrarCitas"

function Citas() {
  const { citas, loading } = useCitasController();
  const { sedes } = useSedesController();
  const { odontologos } = useOdontologosController();
  const { tipoCitas } = useTipoCitasController();
  const { citasFiltradas, cambiarOdontologo, cambiarSede, cambiarTipoCita, filtrar, cambiarFecha  } = useFiltrarCitas(citas);
  console.log("DATA22222", tipoCitas)
  if (loading) {
    return <Spinner/>;
  }
   else{
     if (!citas.length) return <h2>No hay citas asignadas</h2>;
   }
  return (
    <Fragment>
      <div  className="search_container">
        <div className="search_input">
          <input onChange={ cambiarFecha } type={'date'}></input>
        </div>
        <div className="search_input">
          <label for="idSede">Sede: </label>
          <select
            className="form-control us-cn selectRegistro search_input"
            id="idSede"
            name="idSede"
            onChange={ cambiarSede }
          >
            <option selected>Elige...</option>
               {sedes.map((sede) => (
                  <option value={sede._id}>{sede.nombre}</option>
                ))}
          </select>                 
        </div>
        <div className="search_input">
          <label for="idSede">Tipo de cita: </label>
          <select
            className="form-control us-cn selectRegistro search_input"
            id="idCita"
            name="idCita"
            onChange={ cambiarTipoCita }
          >
            <option selected>Elige...</option>
               {tipoCitas.map((tipoCita) => (
                  <option value={tipoCita._id}>{tipoCita.nombre}</option>
                ))}
    
          </select>              
        </div>
        <div className="search_input">
          <label for="idSede">Odontologo: </label>
          <select
            className="form-control us-cn selectRegistro search_input"
            id="idOdonto"
            name="idOdontologo"
            onChange={ cambiarOdontologo }
          >
             <option selected>Elige...</option>
               {odontologos.map((odontologo) => (
                  <option value={odontologo._id}>{odontologo.nombre} {odontologo.apellidos}</option>
                ))}
    
          </select>              
        </div>
        <div className="search_input">
          <button onClick={filtrar}  className="btn btnAdd " >buscar</button>
        </div>
      </div>
      <div className="btnAdd">
        <Link to={"/citas/nueva"}>
          <FontAwesomeIcon icon={faPlus} className="add"></FontAwesomeIcon>
          <label className="add">Reservar Cita</label>
        </Link>
      </div>
      <div className="contenedorTable">
        <div className="tableTitle">
          <h2 id="tableTitle">Mis citas</h2>
        </div>

        <div className="tableModel">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Hora</th>
                  <th>Tipo cita</th>
                  <th>Profesional</th>
                  <th>Sede</th>
                  {/* <th>Estado</th> */}
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {citasFiltradas.map((cita) => (
                  <Cita key={cita._id} cita={cita} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Citas;
