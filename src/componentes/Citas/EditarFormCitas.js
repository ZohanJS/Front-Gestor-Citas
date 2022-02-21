import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth, faCircle } from "@fortawesome/free-solid-svg-icons";
import "./CitaForm.css";
import "./tableCita.css";
import { Link, useHistory } from "react-router-dom";
import { CRMContext } from "../../context/CRMContext";
import odontologoAxios from "../../config/axios";
import { useTipoCitasController } from "../tipoCitas/hooksTipoCitas/useTipoCitasController";
import { useSedesController } from "../sedes/hooksSedes/useSedesController";
import { Button } from "reactstrap";
import Swal from 'sweetalert2';

export function EditarFormCitas({
    handleSubmit,
    handleChange,
    titulo,
    odontologos,
    DatosTipoCita,
    cita
}) {
    const ConsultaOdonto = {
        idOdonto: "",
    };
    // const initialValue = {
    //     idCliente: '',
    //     idHorario: '',
    //     idSede: '',
    //     idCupo: '',
    //     idOdontologo: '',
    //     tipoCita: ''
    // }
    const { push } = useHistory()
    console.log(odontologos);
    const [auth, guardarAuth] = useContext(CRMContext);
    const { tipoCitas } = useTipoCitasController();
    const { sedes } = useSedesController();
    const [DatosOdonto, FiltrarDatosOdonto] = useState(ConsultaOdonto);
    const [horarios, guardarHorarios] = useState([]);
    //const [cita, guardarCita] = useState(initialValue);
    console.log("horariosonchannge", horarios);

    function filtroOndont(event) {
        consultaOdonto();
        FiltrarDatosOdonto({
            ...DatosOdonto,
            [event.target.name]: event.target.value,
        });
    }
    const consultaOdonto = async () => {
        const respuesta = await odontologoAxios.post(
            "/api/filtros/odonto",
            DatosOdonto,
            {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            }
        );
        guardarHorarios(respuesta.data["horario"]);
    };

    const ReasignarCitas = async (idCupo, idHorario) => {
        console.log("cita", cita);
        cita.idCliente = auth.uid;
        cita.idHorario = idHorario;
        cita.idSede = DatosTipoCita.idSede;
        cita.idCupo = idCupo;
        cita.idOdontologo = DatosOdonto.idOdontologo;
        cita.tipoCita = DatosTipoCita.idTipoCita;

        await odontologoAxios
            .put(`/api/cita/update/${cita._id}`, cita, {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            })
            .then((res) => {
                if (!res.data.ok) {
                    Swal.fire({
                        type: "error",
                        title: "Hubo un error",
                        text: res.data.msg,
                    });
                } else {
                    Swal.fire("Cita reasignada con exito", res.data.mensaje, "success");
                }
                push("/citas");
            })
            .catch(() => {
                Swal.fire({
                    type: "error",
                    title: "Hubo un error",
                    text: "Intente nuevamente",
                });
            });
    };

    return (
        <div>
            <FontAwesomeIcon icon={faTooth} className="logo"></FontAwesomeIcon>
            <form className="containerFormularioCita" onSubmit={handleSubmit}>
                <div>
                    <h4>{titulo}</h4>
                    <div className="DivCliente">
                        <label>Nombre:</label>
                        <input
                            className="form-control us-cn"
                            name="idCliente"
                            id="idCliente"
                            placeholder="Nombre"
                            type="text"
                            disabled={true}
                            value={auth.name}
                            required
                        />
                    </div>
                    <div className="grillaCita">
                        <div className="controlInputCita">
                            <label>Tipo de cita: </label>
                            <select
                                className="form-control us-cn selectRegistro"
                                id="tipoCita"
                                name="idTipoCita"
                                onChange={handleChange}
                                required
                            >
                                <option selected>Elige...</option>
                                {tipoCitas.map((tipoCitas) => (
                                    <option key={tipoCitas._id} value={tipoCitas._id}>
                                        {tipoCitas.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="controlInputCita">
                            <label>Sede: </label>
                            <select
                                className="form-control us-cn selectRegistro"
                                id="idSede"
                                name="idSede"
                                onChange={handleChange}
                                required
                            >
                                <option selected>Elige...</option>
                                {sedes.map((sede) => (
                                    <option key={sede._id} value={sede._id}>
                                        {sede.nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="botoneraCita">
                            <div className="botonesCita">
                                <input
                                    type="submit"
                                    className="btn_registroCita btn btn-primary btn2registroCita"
                                    value="Buscar"
                                // onClick={handleSubmit}
                                ></input>
                            </div>
                            <div className="botonesCita">
                                <Link to={"/citas"}>
                                    <input
                                        type="button"
                                        value="Cancelar"
                                        className="btn_registroCita btn btn-primary"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="controlInputCita">
                            <label>Odontologo: </label>
                            <select
                                className="form-control us-cn selectRegistro"
                                id="idOdontologo"
                                name="idOdontologo"
                                onChange={filtroOndont}
                                required
                            >
                                {odontologos ? (
                                    odontologos.length ? (
                                        odontologos.map((odontologo) => (
                                            <option
                                                key={odontologo._id}
                                                value={odontologo._id}
                                            >{`${odontologo.nombre} ${odontologo.apellidos}`}</option>
                                        ))
                                    ) : (
                                        <option selected>Elige Sede y T.Cita</option>
                                    )
                                ) : (
                                    <option selected>No hay registros</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="contenedorTableCita">
                        <div className="tableTitleCita">
                            <h2 id="tableTitleCita">Horarios Disponibles</h2>
                        </div>

                        <div className="tableModelCita">
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Fecha</th>
                                            <th>Cupo</th>
                                            <th>Reservar</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {horarios ? (
                                            horarios.length ? (
                                                horarios.map((horarios) =>
                                                    horarios.idCupos.map((cupos) => (
                                                        <tr key={horarios._id} value={horarios._id}>
                                                            <td>{horarios.fecha}</td>
                                                            <td>{`${cupos.cupo.horaInicio} ${cupos.cupo.horaFin}`}</td>
                                                            <td>
                                                                <Button
                                                                    onClick={() =>
                                                                        ReasignarCitas(cupos.cupo._id, horarios._id)
                                                                    }
                                                                    className="btnIcon"
                                                                    id="edit"
                                                                >
                                                                    <FontAwesomeIcon
                                                                        icon={faCircle}
                                                                    ></FontAwesomeIcon>
                                                                </Button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                )
                                            ) : (
                                                <tr>Elige un Odontólogo</tr>
                                            )
                                        ) : (
                                            <tr>No hay registros</tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}