import React, { useEffect, useState, useContext, Fragment } from 'react';

// importar cliente axios
import odontologoAxios from '../../config/axios';
import Odontologo from './Odontologo';
import Spinner from '../layout/Spinner';
import { Link, withRouter } from 'react-router-dom';

// import el Context
import { CRMContext } from '../../context/CRMContext';

function Odontologos(props) {
    // Trabajar con el state
    // Odontologos = state,  guardarOdontologos = funcion para guardar el state
    const [ odontologos, guardarOdontologos ] = useState([]);

    // utilizar valores del context
    const [auth, guardarAuth ] = useContext( CRMContext );

    // use effect es similar a componentdidmount y willmount
    useEffect( () => {

        if(auth.token !== '') {
            // Query a la API
            const consultarAPI = async () => {
                try {
                    const odontologosConsulta = await odontologoAxios.get('/api/odontologo', {
                        headers: {
                            Authorization : `Bearer ${auth.token}`
                        }
                    });
                    console.log(odontologosConsulta.data);
                    // colocar el resultado en el state
                    guardarOdontologos(odontologosConsulta.data["odontologos"]);

                } catch (error) {
                    // Error con authorizacion
                    if(error.response.status = 500) {
                        props.history.push('/iniciar-sesion');
                    }
                }
            }
            consultarAPI();
        } else {
            props.history.push('/iniciar-sesion');
        }
    }, [odontologos] );


    // Si el state esta como false
    if(!auth.auth) {
        props.history.push('/iniciar-sesion');
    }

    if(!odontologos.length) return <Spinner /> 

    
    return (
      <Fragment>
        <h2>Odontólogos</h2>
        <Link to={"/odontologos/nuevo"} className="btn btn-verde nvo-cliente">
          <i className="fas fa-plus-circle"></i>
          Nuevo Odontólogo
        </Link>
        <div class="contenedorTable">
          <div class="tableTitle">
            <h2>Consultas</h2>
          </div>
          <div class="tableModel">
            <div class="table-responsive">
              <table>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Documento</th>
                    <th>Telefono</th>
                    <th>Horario</th>
                  </tr>
                </thead> 
                <tbody className="listado-odontologos">
                {odontologos.map((odontologo) => (
                    <Odontologo key={odontologo._id} odontologo={odontologo} />
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </Fragment>
    );
}
export default withRouter(Odontologos);