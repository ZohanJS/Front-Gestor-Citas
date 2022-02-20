import React from 'react';
import {useContext} from "react";

import Swal from 'sweetalert2';
import odontologoAxios from '../../config/axios';
import {CRMContext} from '../../context/CRMContext';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'reactstrap';
import { useHistory } from "react-router-dom";

function Historial({historial}) {
    const { push } = useHistory()
    const [auth ] = useContext(CRMContext);  
    
    const {_id, idCita, observacion, fecha } = historial;

    return (
        <tr className="cupo">
                <td className="horaFIn">{observacion}</td>                
                <td className="horaFIn">{fecha}</td>                
                <td>
                    <div>
                        <Button onClick={() => push('/', { historial })} className="btnIcon" id="edit"><FontAwesomeIcon icon={faPen}></FontAwesomeIcon></Button>
                    </div>
                </td>
        </tr>
    )
}
export default Historial;