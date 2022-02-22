import React, { Fragment } from 'react';
import { useEditarPerfilController } from './hooksPerfil/useEditarPerfilController';
// import { Perfil } from './Perfil'
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function EditarContraseña({ }) {
    const { editarContraseña, leerContraseña, contraseña } = useEditarPerfilController()
    console.log("Datos Perfil", contraseña);

    return (
        <Fragment>
            <h2 className="titulo">Editar contraseña</h2>
            <form className="containerFormularioPerfil" onSubmit={editarContraseña}>
                <div>
                    <div className="grillaPerfil">
                        <div>
                            <label>Contraseña nueva:</label>
                            <input
                                className="form-control us-cn"
                                placeholder="Nueva contraseña"
                                type="text"
                                name="password"
                                required
                                onChange={leerContraseña}
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

export default EditarContraseña