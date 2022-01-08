import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import odontologoAxios from '../../config/axios';

function Sede({sede}) {


    // elimina una sede
    const eliminarSede = id => {
        Swal.fire({
            title: '¿Estás seguro?',
            text: "Una sede eliminada no se puede recuperar",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3D82DB',
            cancelButtonColor: '#A01C48',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText : 'No, Cancelar'
        }).then((result) => {
            if (result.value) {
              // eliminar en la rest api
              odontologoAxios.delete(`/sedes/${id}`)
                .then(res => {
                    if(res.status === 200) {
                        Swal.fire(
                            'Eliminado',
                            res.data.mensaje,
                            'success'
                        )
                    }
                })
            }
        })
    }

    const {_id, nombre, direccion, telefono, horario, estado } = sede;

    return (
        <li className="sede">
            <div className="info-sede">
                <p className="nombre">{nombre}</p>
                <p className="direccion">{direccion}</p>
                <p className="telefono">{telefono}</p>
                <p className="horario">{horario}</p>
                <p className="estado">{estado}</p>
            </div>
            <div className="acciones">
                <Link to={`/sedes/editar/${_id}`} className="btn btn-azul">
                    <i className="fas fa-pen-alt"></i>
                    Editar Sede
                </Link>

                <button 
                    type="button" 
                    className="btn btn-rojo btn-eliminar"
                    onClick={() => eliminarSede(_id) }
                >
                    <i className="fas fa-times"></i>
                    Eliminar Odontologo
                </button>
            </div>
        </li>
    )
}
export default Sede;