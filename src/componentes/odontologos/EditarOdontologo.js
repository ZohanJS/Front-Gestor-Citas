import React, {Fragment, useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom'; 
import odontologoAxios from '../../config/axios';



function EditarOdontologo(props){

    // obtener el ID
    const { id } = props.match.params;

    // odontologo = state, datosOdontologo = funcion para guardar el state
    const[odontologo, datosOdontologo] = useState({
        nombre: '',
        apellido: '',
        empresa : '',
        email: '',
        telefono :''
    });

    // Query a la API
    const consultarAPI = async () => {
        const odontologoConsulta = await odontologoAxios.get(`/odontologos/${id}`);

       // colocar en el state
       datosOdontologo(odontologoConsulta.data);
    }

    // useEffect, cuando el componente carga
    useEffect( () => {
        consultarAPI();
    }, []);

    // leer los datos del formulario
    const actualizarState = e => {
        // Almacenar lo que el usuario escribe en el state
        datosOdontologo({
            // obtener una copia del state actual
            ...odontologo, 
            [e.target.name] : e.target.value
        })
    }

    // Envia una petición por axios para actualizar el odontologo
    const actualizarOdontologo = e => {
        e.preventDefault();

        // enviar petición por axios
        odontologoAxios.put(`/odontologos/${odontologo._id}`, odontologo) 
            .then(res => {
                // validar si hay errores de mongo 
                if(res.data.code === 11000) {
                    Swal.fire({
                        type: 'error',
                        title: 'Hubo un error',
                        text: 'Ese odontologo ya esta registrado'
                    })
                } else {
                    Swal.fire(
                        'Correcto',
                        'Se actualizó Correctamente',
                        'success'
                    )
                }

                // redireccionar
                props.history.push('/');
            })
    }

    // Validar el formulario
    const validarOdontologo = () => {
        // Destructuring
        const { nombre, apellido, email, empresa, telefono} = odontologo;

        // revisar que las propiedades del state tengan contenido
        let valido = !nombre.length || !apellido.length || !email.length || !empresa.length || !telefono.length;

        // return true o false
        return valido;
    }

    return (
        <Fragment>
            <h2>Editar Odontologo</h2>
            
            <form
                onSubmit={actualizarOdontologo}
            >
                <legend>Llena todos los campos</legend>
                <div className="campo">
                    <label>Nombre:</label>
                    <input  type="text" 
                            placeholder="Nombre Odontologo" 
                            name="nombre"
                            onChange={actualizarState}
                            value={odontologo.nombre}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input type="text" 
                          placeholder="Apellido Odontologo" 
                          name="apellido" 
                          onChange={actualizarState}
                          value={odontologo.apellido}
                    />
                </div>
            
                <div className="campo">
                    <label>Empresa:</label>
                    <input type="text" 
                          placeholder="Empresa Odontologo" 
                          name="empresa" 
                          onChange={actualizarState}
                          value={odontologo.empresa}
                    />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input type="email" 
                            placeholder="Email Odontologo" 
                            name="email" 
                            onChange={actualizarState}
                            value={odontologo.email}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input type="tel" 
                        placeholder="Teléfono Odontologo" 
                        name="telefono" 
                        onChange={actualizarState}
                        value={odontologo.telefono}
                    />
                </div>

                <div className="enviar">
                    <input 
                        type="submit" 
                        className="btn btn-azul" 
                        value="Guardar Cambios" 
                        disabled={ validarOdontologo() }
                    />
                </div>
            </form>
        </Fragment>
    )
}

// HOC, es una función que toma un componente y retorna un nuevo componente
export default  withRouter(EditarOdontologo);