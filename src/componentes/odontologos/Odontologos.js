import React, { Fragment } from "react";
import Odontologo from "./Odontologo";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import NuevoOdontologo from "./NuevoOdontologo";
import { useOdontologosController } from "./hooks/UseOdontologosController";
import Spinner from "../layout/Spinner";



function Odontologos() {
  const { odontologos } = useOdontologosController();

  if (!odontologos.length) return <Spinner />;

  return (
    <Fragment>
      
      {/*    <NuevoOdontologo /> */}
      <div className="btnAdd">
        <Link to={"/odontologos/nuevo"}>
          <FontAwesomeIcon icon={faPlus} className="add"></FontAwesomeIcon>
          <p className="add" id="addM">
            Agregar Médico
          </p>
        </Link>
      </div>      
      <div className="contenedorTable">
        <div className="tableTitle">
          <h2 id="tableTitle">Odontólogos</h2>
        </div>
        <div className="tableModel">
          <div className="table-responsive">
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>Telefono</th>
                  <th>Documento</th>
                  <th>Horario</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {odontologos.map((odontologo) => (
                  <Odontologo key={odontologo._id} odontologo={odontologo} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Odontologos;
