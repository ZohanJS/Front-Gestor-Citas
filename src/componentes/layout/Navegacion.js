import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CRMContext } from '../../context/CRMContext';
import { withRouter } from 'react-router-dom';
import './navegacion.css';

const Navegacion = (props) => {

    const [auth, guardarAuth] = useContext(CRMContext);
    if (!auth.auth) return null;

    const cerrarSesion = () => {

        guardarAuth({
            token: '',
            auth: false,
            rol: '',
            uid: '',
            name: ''
        });

        localStorage.setItem('token', '');

        props.history.push('/iniciar-sesion');
    }


    return (
        <aside className="sidebar col-3">
            <h2>DentalCare</h2>
            <nav className="navegacion">
                {auth.rol === "administrador" ?
                    (<><Link to={"/sedes"} className="sedes">Sedes</Link>
                        <Link to={"/odontologos"} className="odontologos">Odontologos</Link>
                        <Link to={"/horario"} className="horario">Horario</Link>
                        <Link to={"/cupos"} className="cupos">Cupos</Link></>
                    )
                    :auth.rol === "usuario" ? 
                    (<><Link to={"/perfil"} className="perfil">Perfil</Link>
                        <Link to={"/citas"} className="citas">Mis citas</Link></>
                    )
                    :
                    (<><Link to={"/perfil"} className="perfil">Perfil</Link>
                        <Link to={"/citasOdondologo"} className="citas">Mis citas</Link>
                        </>
                    )
                    
                }
                {auth.auth ? (
                    <button
                        type="button"
                        className="btn btn-rojo boton-salir"
                        onClick={cerrarSesion}
                    >
                        <i className="fas fa-sign-out-alt"></i>

                    </button>
                ) : null}
            </nav>
        </aside>

    );
}

export default withRouter(Navegacion);