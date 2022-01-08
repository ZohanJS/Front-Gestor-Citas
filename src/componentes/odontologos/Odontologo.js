import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './tables.css';
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

		
              <tr className="info-odontologo">
                <td>{nombre} {apellidos}</td>
                <td>{email}</td>
                <td>{telefono}</td>
                <td>0</td>
                <td>0</td>
              </tr>
		
	) 
}
export default Odontologo;
