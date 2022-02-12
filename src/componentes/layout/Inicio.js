import React, { Fragment, useContext } from "react";
import { CRMContext } from '../../context/CRMContext';
import { useHistory } from "react-router-dom";

function Inicio() {
    const { push } = useHistory();
    const [auth, guardarAuth] = useContext(CRMContext);
    if (!auth.auth) { push('/iniciar-sesion'); }
    
    return (
        <Fragment>
            <div >
                <h2 className="text-primary">Bienvenido, {auth.name}</h2>
                <img src="https://assets.grove.dental/Images/Sites/D/DG-GroveDentalGroup/MasterPage/509360.gif"/>
            </div>
            
        </Fragment>
    );
}
export default Inicio;
