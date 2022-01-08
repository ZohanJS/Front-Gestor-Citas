import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { CRMContext } from '../../context/CRMContext';
import './navegacion.css';

const Navegacion = () => {

    const [auth, guardarAuth] = useContext(CRMContext);

    if(!auth.auth) return null;

    return ( 
        <aside className="sidebar col-3">
            <h2>Administración</h2>

            <nav className="navegacion">
                <Link to={"/sedes"} className="sedes">Sedes</Link>
                <Link to={"/"} className="odontologos">Odontologos</Link>
                <Link to={"/pedidos"} className="pedidos">Pedidos</Link>
            </nav>
        </aside>

     );
}
 
export default Navegacion;