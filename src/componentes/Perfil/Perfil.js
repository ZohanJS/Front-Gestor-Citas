import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { usePerfilController } from "./hooksPerfil/usePerfilController";
import { CRMContext } from '../../context/CRMContext';
import {Button} from 'reactstrap';
import "./Perfil.css";

function Perfil() {
    const { perfil } = usePerfilController();
    const { push } = useHistory();
    const [auth, guardarAuth] = useContext(CRMContext);
    if (!auth.auth) { push('/iniciar-sesion'); }
    
    let fechaNacimiento;
    if (!!perfil.fechaNacimiento) {
        fechaNacimiento = perfil.fechaNacimiento.split('T')[0];
    }
    else {
        fechaNacimiento = " ";
    }

    return (
        <Fragment>
            <h2 className="titulo">Perfil</h2>
            <form className="containerFormularioPerfil">
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
                                value={perfil.email}
                                disabled

                            />
                        </div>

                        <div>
                            <label>Telefono:</label>
                            <input
                                className="form-control us-cn"
                                placeholder="Telefono"
                                type="number"
                                value={perfil.telefono}
                                disabled
                            />
                        </div>
                    </div>
                </div>
            </form>
            <div className="btnAddPerfil backgroundAzul">
            
              <Button onClick={() => push('/perfil/editar', { perfil })} className="btnIcon btnPerfil">Editar perfil</Button>
    
            </div>
            <div className="btnAddPerfil "> 
                <Button onClick={() => push('/perfil/editar/password')} className="btnIcon btnPerfil">Editar contraseña</Button>
            </div>
        </Fragment>
    );
}
export default Perfil;