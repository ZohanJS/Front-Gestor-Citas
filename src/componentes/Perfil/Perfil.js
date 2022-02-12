import React, { Fragment, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { usePerfilController } from "./hooksPerfil/usePerfilController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { CRMContext } from '../../context/CRMContext';

function Perfil() {
    const { perfil } = usePerfilController();
    const { push } = useHistory();
    const [auth, guardarAuth] = useContext(CRMContext);
    if (!auth.auth) { push('/iniciar-sesion'); }
    
    // let fechaNacimiento = perfil['fechaNacimiento'];
    // let nuevofechaNacimiento = new Date(fechaNacimiento);
    // console.log(nuevofechaNacimiento);
    return (
        <Fragment>
            <div className="btnAdd">
                <Link to={"/perfil/"}>
                    <FontAwesomeIcon icon={faPlus} className="add"></FontAwesomeIcon>
                    <label className="add">Editar perfil</label>
                </Link>
            </div>
            <h2>Perfil</h2>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h3>Nombre: </h3>
                    </div>
                    <div className="col">
                        <h4>{perfil.nombre}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Apellidos: </h3>
                    </div>
                    <div className="col">
                        <h4>{perfil.apellidos}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>No. documento: </h3>
                    </div>
                    <div className="col">
                        <h4>{perfil.documento}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>E-mail: </h3>
                    </div>
                    <div className="col">
                        <h4>{perfil.email}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Telefono: </h3>
                    </div>
                    <div className="col">
                        <h4>{perfil.telefono}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h3>Fecha de nacimiento: </h3>
                    </div>
                    <div className="col">
                        <h4>{perfil.fechaNacimiento}</h4>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Perfil;