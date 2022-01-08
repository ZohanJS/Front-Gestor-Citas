import React, {useEffect, useState, useContext,  Fragment} from 'react';
import { Link } from 'react-router-dom';
// importar cliente axios
import odontologoAxios from '../../config/axios';
import Sede from './Sede';
import Spinner from '../layout/Spinner';

// import el Context
import { CRMContext } from '../../context/CRMContext';

function Sedes(props) {

    // sedes = state, guardarsedes = funcion para guardar el state
    const [sedes, guardarSedes] = useState([]);

    // utilizar valores del context
    const [auth, guardarAuth ] = useContext( CRMContext );

    // useEffect para consultar api cuando cargue
    useEffect( () => {

        if(auth.token !== '') {
            // Query a la API
            const consultarAPI = async () => {
                try {
                    const sedesConsulta = await odontologoAxios.get('/sedes', {
                        headers: {
                            Authorization : `Bearer ${auth.token}`
                        }
                    });
                    guardarSedes(sedesConsulta.data);
                } catch (error) {
                    // Error con authorizacion
                    if(error.response.status = 500) {
                        props.history.push('/iniciar-sesion');
                    }
                }
            }
            // llamado a la api
            consultarAPI();

        } else {
            props.history.push('/iniciar-sesion');
        }
    }, [sedes]);

    // Si el state esta como false
    if(!auth.auth) {
        props.history.push('/iniciar-sesion');
    }


    // spinner de carga
    if(!sedes.length) return <Spinner /> 


    return (
        <Fragment>
            <h2>Sedes</h2>

            <Link to={'/sedes/nuevo'} className="btn btn-verde nvo-odontologo"> 
                <i className="fas fa-plus-circle"></i>
                Nueva Sede
            </Link>

            <ul className="listado-sedes">
                {sedes.map(sede => (
                    <Sede 
                        key={sede._id}
                        sede={sede}
                    />
                ))}
            </ul>
        </Fragment>
    )
}
export default Sedes;