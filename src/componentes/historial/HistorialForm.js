import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams} from "react-router-dom";
import "./../odontologos/FormularioCrud.css";
import "./cupoForm.css";

export function HistorialForm({
  handleSubmit,
  handleChange,
  validarHistorial,
  historial,
  buttonText,
  titulo
}) {
  return (
    <div>
      <form className="containerFormulario" onSubmit={handleSubmit}>
        <div>
          <h4>{titulo}</h4>
          <div className="">
            <div>
              <label>Observaciones:</label>
              <textarea
                className="form-control us-cn"
                name="observacion"
                id="observacion"
                placeholder=""
                type="text"
                value={historial.observacion}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Fecha: </label>
              <input
                className="form-control us-cn"
                name="fecha"
                id="fecha"
                placeholder="Fecha"
                type="date"
                value={historial.fecha}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="botoneraCupo">
          
          <div className="botonesCupo">
            <Link to={"/citasOdondologo"}>
              <input
                type="button"
                value="Cancelar"
                className="btn_registro btn btn-primary"
              />
            </Link>

            <input
              type="submit"
              className="btn_registro btn btn-primary btn2registro"
              value={buttonText}
            ></input>
          </div>
        </div>
      </form>
    </div>
  );
}
