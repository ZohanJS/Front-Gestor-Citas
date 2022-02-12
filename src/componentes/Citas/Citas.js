import React, { Fragment, useState } from "react";
import Cita from "./Cita";
import { useCitasController } from "./hooksCitas/useCitasController";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../layout/Spinner";

function Citas() {
  const { citas, loading } = useCitasController();
  if (loading) {
    return <Spinner/>;
  }
  // else{
  //   if (!citas.length) return <h2>No hay citas asignadas</h2>;
  // }
  return (
    <Fragment>
      <div className="btnAdd">
        <Link to={"/citas/nueva"}>
          <FontAwesomeIcon icon={faPlus} className="add"></FontAwesomeIcon>
          <label className="add">Nueva cita</label>
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
                {citas.map((cita) => (
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
