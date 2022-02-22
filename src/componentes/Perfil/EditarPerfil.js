import React, { Fragment } from 'react';
import { useEditarPerfilController } from './hooksPerfil/useEditarPerfilController';
// import { Perfil } from './Perfil'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function EditarPerfil({ }) {
    const { state } = useLocation()
    const { editarPerfil, handleChange, perfil } = useEditarPerfilController(state.perfil)
    console.log("Datos Perfil", perfil);
    let fechaNacimiento;
    if (!!perfil.fechaNacimiento) {
        fechaNacimiento = perfil.fechaNacimiento.split('T')[0];
    }
    else {
        fechaNacimiento = " ";
    }

    return (
        <Fragment>
            <h2 className="titulo">Editar perfil</h2>
            <form className="containerFormularioPerfil" onSubmit={editarPerfil}>
                <div>
                    <div className="grillaPerfil">
                        <div>
                            <label>Nombre:</label>
                            <input
                                className="form-control us-cn"
                                placeholder="Nombre"
                                type="text"
                                value={perfil.nombre}
                                disabled
                            />
                        </div>

                        <div>
                            <label>Apellidos: </label>
                            <input
                                className="form-control us-cn"
                                placeholder="Apellidos"
                                type="text"
                                value={perfil.apellidos}
                                disabled
                            />
                        </div>

                        <div>
                            <label>Fecha nacimiento: </label>
                            <input
                                className="form-control us-cn"
                                placeholder="Fecha de nacimiento"
                                type="text"
                                value={fechaNacimiento}
                                disabled
                            />
                        </div>

                        <div>
                            <label>No. Documento: </label>
                            <input
                                className="form-control us-cn"
                                placeholder="No. Documento"
                                type="number"
                                value={perfil.documento}
                                disabled
                            />
                        </div>

                        <div>
                            <label> E-mail: </label>
                            <input
                                className="form-control us-cn"
                                placeholder="E-mail"
                                type="text"
                                name='email'
                                value={perfil.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <label>Telefono:</label>
                            <input
                                className="form-control us-cn"
                                placeholder="Telefono"
                                type="number"
                                name='telefono'
                                value={perfil.telefono}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="botoneraPerfil">
                            <div className='botonesPerfil'>
                                <Link to={"/perfil"}>
                                    <input
                                        type="button"
                                        value="Cancelar"
                                        className="btn_registroPerfil btn btn-primary"
                                    />
                                </Link>
                                <input
                                    type="submit"
                                    className="btn_registroPerfil btn btn-primary btn2registroPerfil"
                                    value="Editar"
                                ></input>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Fragment>
    )
}

export default EditarPerfil
