import React, { Fragment } from "react";
import Historial from "./historial";
import { Link, useParams } from "react-router-dom";
import { useHistorialController } from "./hooksHistorial/useHistorialController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../layout/Spinner";

function Historiales() {    
    
    const {idCita}  = useParams();
    const { historial, loading } = useHistorialController(idCita);

    if (loading) return <Spinner/>;

    if (!historial.length) return (
        <Fragment>
            <h2>No hay Historial</h2>
            <div className="btnAdd">
                <Link to={`/historial/nuevo/${idCita}`}>
                <FontAwesomeIcon icon={faPlus} className="add"></FontAwesomeIcon>
                <label className="add">Agregar Historial</label>
                </Link>
            </div>
        </Fragment>
    );

    return (
        <Fragment>
        <div className="btnAdd">
            <Link to={`/historial/nuevo/${idCita}`}>
            <FontAwesomeIcon icon={faPlus} className="add"></FontAwesomeIcon>
            <label className="add">Agregar Historial</label>
            </Link>
        </div>
        <div className="contenedorTable">
            <div className="tableTitle">
            <h2 id="tableTitle">Historial</h2>
            </div>

            <div className="tableModel">
            <div className="table-responsive">
                <table>
                <thead>
                    <tr>
                    <th>Observacion</th>                  
                    <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {historial.map((historial) => (
                    <Historial key={historial._id} historial={historial} />
                    ))}
                </tbody>
                </table>
            </div>
            </div>
        </div>
        </Fragment>
  );
}
export default Historiales;
