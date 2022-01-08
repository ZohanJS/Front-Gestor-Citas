import React, {useState, Fragment} from 'react';
import Swal from 'sweetalert2';
import odontologoAxios from '../../config/axios';
import { withRouter } from 'react-router-dom';

function NuevaSede(props) {

    //sede = state, guardarSede = setstate
    const [sede, guardarSede] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        horario: '',
        estado: ''
    });

    // archivo = state, guardarArchivo = setState
    // const [archivo, guardarArchivo] = useState('');

    // almacena la nueva sede en la base de datos.
    const agregarSede = async e => {
        e.preventDefault();

        // crear un formdata
        const formData = new FormData();
        formData.append('nombre', sede.nombre);
        formData.append('direccion', sede.direccion);
        formData.append('telefono', sede.telefono);
        formData.append('horario', sede.horario);
        formData.append('estado', sede.estado);

        // almacenarla en la BD
        try {
            const res = await odontologoAxios.post('/sedes', formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            } );

            // Lanzar una alerta
            if(res.status === 200) {
                Swal.fire(
                    'Agregada Correctamente',
                    res.data.mensaje,
                    'success'
                )
            }

            // redireccionar
            props.history.push('/sedes');

        } catch (error) {
            console.log(error);
            // lanzar alerta
            Swal.fire({
                type:'error',
                title: 'Hubo un error',
                text: 'Vuelva a intentarlo'
            })
        }
    }

    // leer los datos del formulario
    const leerInformacionSede = e => {
        guardarSede({
            // obtener una copia del state y agregar el nuevo
            ...sede,
            [e.target.name] : e.target.value
        })
    }

    // coloca la imagen en el state

    return (
        <Fragment>
            <h2>Nueva Sede</h2>

            <form
                onSubmit={agregarSede}
            >
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        placeholder="Nombre Sede" 
                        name="nombre"
                        onChange={leerInformacionSede}
                    />
                </div>

                <div className="campo">
                    <label>Direccion:</label>
                    <input 
                        type="text" 
                        name="direccion" 
                        min="0.00" 
                        step="0.01" 
                        placeholder="Direccion"
                        onChange={leerInformacionSede}
                    />
                </div>

                <div className="campo">
                    <label>Direccion:</label>
                    <input 
                        type="text" 
                        name="direccion" 
                        min="0.00" 
                        step="0.01" 
                        placeholder="Direccion"
                        onChange={leerInformacionSede}
                    />
                </div>

                <div className="campo">
                    <label>Telefono:</label>
                    <input 
                        type="number" 
                        name="telefono" 
                        min="0.00" 
                        step="0.01" 
                        placeholder="Telefono"
                        onChange={leerInformacionSede}
                    />
                </div>

                <div className="campo">
                    <label>Horario:</label>
                    <input 
                        type="text" 
                        name="horario" 
                        min="0.00" 
                        step="0.01" 
                        placeholder="Horario"
                        onChange={leerInformacionSede}
                    />
                </div>

                <div className="campo">
                    <label>Estado:</label>
                    <input 
                        type="text" 
                        name="estado" 
                        min="0.00" 
                        step="0.01" 
                        placeholder="Estado"
                        onChange={leerInformacionSede}
                    />
                </div>

                <div className="enviar">
                        <input type="submit" className="btn btn-azul" value="Agregar Sede" />
                </div>
            </form>
        </Fragment>
    )
}
export default withRouter(NuevaSede);