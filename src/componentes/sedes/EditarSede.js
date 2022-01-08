import React, {useState, useEffect, Fragment} from 'react';
import Swal from 'sweetalert2';
import odontologoAxios from '../../config/axios';
import { withRouter } from 'react-router-dom';
import Spinner from '../layout/Spinner';

function EditarSedes(props) {

    // obtener el ID
    const { id } = props.match.params;

    // producto = state, y funcion para actualizar
    const [sede, guardarSede ] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        horario: '',
        estado: ''
    });

    // archivo = state, guardarArchivo = setState
    const [archivo, guardarArchivo] = useState('');

    // cuando el componente carga
    useEffect(() => {
         // consultar la api para traer la sede a editar
        const consultarAPI = async () => {
            const sedeConsulta = await odontologoAxios.get(`/sedes/${id}`);
            guardarSede(sedeConsulta.data);
        }

        consultarAPI();
    }, [])

    // Edita una Sede en la base de datos
    const editarSede = async e => {
        e.preventDefault();

        // crear un formdata
        const formData = new FormData();
        formData.append('nombre', sede.nombre);
        formData.append('direccion', sede.direccion);
        formData.append('telefono', sede.telefono);
        formData.append('horario', sede.horario);
        formData.append('estado', sede.estado);

        // almacenarlo en la BD
        try {
            const res = await odontologoAxios.put(`/sedes/${id}`, formData, {
                headers: {
                    'Content-Type' : 'multipart/form-data'
                }
            } );

            // Lanzar una alerta
            if(res.status === 200) {
                Swal.fire(
                    'Editada Correctamente',
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
    const leerInformacionSede= e => {
        guardarSede({
            // obtener una copia del state y agregar el nuevo
            ...sede,
            [e.target.name] : e.target.value
        })
    }

    // extraer los valores del state
    const { nombre, direccion, telefono, horario, estado } = sede;

    if(!nombre) return <Spinner />

    return (
        <Fragment>
            <h2>Editar Sede</h2>

            <form
                onSubmit={editarSede}
            >
                <legend>Llena todos los campos</legend>

                <div className="campo">
                    <label>Nombre:</label>
                    <input 
                        type="text" 
                        placeholder="Nombre Sede" 
                        name="nombre"
                        onChange={leerInformacionSede}
                        defaultValue={nombre}
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
                        defaultValue={direccion}
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
                        defaultValue={telefono}
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
                        defaultValue={horario}
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
                        defaultValue={estado}
                    />
                </div>

                <div className="enviar">
                        <input type="submit" className="btn btn-azul" value="Editar Sede" />
                </div>
            </form>
        </Fragment>
    )
}
export default withRouter(EditarSedes);