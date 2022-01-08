import React, { useEffect, useState, useContext, Fragment } from 'react';

// importar cliente axios
import clienteAxios from '../../config/axios';
import Cliente from './Cliente';
import Spinner from '../layout/Spinner';
import { Link, withRouter } from 'react-router-dom';

// import el Context
import { CRMContext } from '../../context/CRMContext';

function Clientes(props) {
    // Trabajar con el state
    // clientes = state,  guardarClientes = funcion para guardar el state
    const [ clientes, guardarClientes ] = useState([]);

    // utilizar valores del context
    const [auth, guardarAuth ] = useContext( CRMContext );

    // use effect es similar a componentdidmount y willmount
    useEffect( () => {

        if(auth.token !== '') {
            // Query a la API
            const consultarAPI = async () => {
                try {
                    const clientesConsulta = await clienteAxios.get('/api/odontologo', {
                        headers: {
                            Authorization : `Bearer ${auth.token}`
                        }
                    });
                    console.log(clientesConsulta.data);
                    // colocar el resultado en el state
                    guardarClientes(clientesConsulta.data["odontologos"]);

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
    }, [clientes] );


    // Si el state esta como false
    if(!auth.auth) {
        props.history.push('/iniciar-sesion');
    }

    if(!clientes.length) return <Spinner /> 

    
    return (
      <Fragment>
        <h2>Odontólogos</h2>
        <Link to={"/clientes/nuevo"} className="btn btn-verde nvo-cliente">
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
                <tbody className="listado-clientes">
                {clientes.map((cliente) => (
                    <Cliente key={cliente._id} cliente={cliente} />
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
      </Fragment>
    );
}
export default withRouter(Clientes);