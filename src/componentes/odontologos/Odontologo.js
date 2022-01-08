import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import odontologoAxios from '../../config/axios';

function Odontologo({ odontologo }) {
	// extraer los valores
	const { _id, nombre, apellidos, email, telefono } = odontologo;

	// Eliminar odontologo
	const eliminarOdontologo = idOdontologo => {
		Swal.fire({
			title: '¿Estas seguro?',
			text: "Un odontologo eliminado no se puede recuperar",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3D82DB',
			cancelButtonColor: '#A01C48',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
		}).then((result) => {
			if (result.value) {
                // Llamado a axios
                odontologoAxios.delete(`/odontologos/${idOdontologo}`)
                    .then(res => {
                        Swal.fire(  
                            'Eliminado', 
                            res.data.mensaje, 
                            'success'
                        );
                    });
                    
			}
		});
	};

	return (
		<li className="odontologo">
			<div className="info-odontologo">
				<p className="nombre">
					{nombre} {apellidos}
				</p>
				<p>{email}</p>
				<p>Tel: {telefono}</p>
			</div>
			<div className="acciones">
				<Link to={`/odontologo/editar/${_id}`} className="btn btn-azul">
					<i className="fas fa-pen-alt" />
					Editar Odontologo
				</Link>

				<Link to={`/pedidos/nuevo/${_id}`} className="btn btn-amarillo">
					<i className="fas fa-plus" />
					Nuevo Pedido
				</Link>

                <button 
                    type="button" 
                    className="btn btn-rojo btn-eliminar" 
                    onClick={() => eliminarOdontologo(_id)}
                >
					<i className="fas fa-times" />
					Eliminar Odontologo
				</button>
			</div>
		</li>
	);
}
export default Odontologo;
