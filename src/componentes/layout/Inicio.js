import React, { Fragment, useContext } from "react";
import { CRMContext } from '../../context/CRMContext';
import { useHistory } from "react-router-dom";

function Inicio() {
    const { push } = useHistory();
    const [auth, guardarAuth] = useContext(CRMContext);

    var hayToken = localStorage.getItem('token');


    console.log('token',hayToken);
    if (!hayToken) { push('/iniciar-sesion'); }
    
    return (
        <Fragment>
            <div className="wrapper-inicio" >
                <h2 className="text-primary">Bienvenido, {auth.name}</h2>
                <img src="https://assets.grove.dental/Images/Sites/D/DG-GroveDentalGroup/MasterPage/509360.gif" className="gifcito"/>
            </div>
            
        </Fragment>
    );
}
export default Inicio;
