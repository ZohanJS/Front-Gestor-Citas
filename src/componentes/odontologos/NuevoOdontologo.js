import React, {Fragment, useState, useContext} from 'react';
import Swal from 'sweetalert2';
import { withRouter } from 'react-router-dom'; 
import odontologoAxios from '../../config/axios';

// import el Context
import { CRMContext } from '../../context/CRMContext';

function NuevoOdontologo({history}){

    // utilizar valores del context
    const [auth, guardarAuth ] = useContext( CRMContext );

    // odontologo = state, guardarodontologo = funcion para guardar el state
    const[odontologo, guardarOdontologo] = useState({
        nombre: '',
        apellido: '',
        empresa : '',
        email: '',
        telefono :''
    });

    // leer los datos del formulario
    const actualizarState = e => {
        // Almacenar lo que el usuario escribe en el state
        guardarOdontologo({
            // obtener una copia del state actual
            ...odontologo, 
            [e.target.name] : e.target.value
        })

    }

    // Añade en la REST API un odontologo nuevo
    const agregarOdontologo = e => {
        e.preventDefault();

        // enviar petición
        odontologoAxios.post('/odontologo', odontologo)
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
                        'Se agregó el Odontologo',
                        res.data.mensaje,
                        'success'
                    )
                }
                // Redireccionar
                history.push('/');
            });
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

    // verificar si el usuario esta autenticado o no
    if(!auth.auth && (localStorage.getItem('token') === auth.token ) ) {
        history.push('/iniciar-sesion');
    }

    return (


        <Fragment>
            <h2>Nuevo Odontologo</h2>
            
            <form
                onSubmit={agregarOdontologo}
            >
                <legend>Llena todos los campos</legend>
                <div className="campo">
                    <label>Nombre:</label>
                    <input  type="text" 
                            placeholder="Nombre Odontologo" 
                            name="nombre"
                            onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Apellido:</label>
                    <input type="text" 
                          placeholder="Apellido Odontologo" 
                          name="apellido" 
                          onChange={actualizarState}
                    />
                </div>
            
                <div className="campo">
                    <label>Empresa:</label>
                    <input type="text" 
                          placeholder="Empresa Odontologo" 
                          name="empresa" 
                          onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Email:</label>
                    <input type="email" 
                            placeholder="Email Odontologo" 
                            name="email" 
                            onChange={actualizarState}
                    />
                </div>

                <div className="campo">
                    <label>Teléfono:</label>
                    <input type="tel" 
                        placeholder="Teléfono Odontologo" 
                        name="telefono" 
                        onChange={actualizarState}
                    />
                </div>

                <div className="enviar">
                    <input 
                        type="submit" 
                        className="btn btn-azul" 
                        value="Agregar Odontologo" 
                        disabled={ validarOdontologo() }
                    />
                </div>
            </form>
        </Fragment>
    )
}

// HOC, es una función que toma un componente y retorna un nuevo componente
export default  withRouter(NuevoOdontologo);