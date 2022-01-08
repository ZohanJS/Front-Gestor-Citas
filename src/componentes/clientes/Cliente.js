import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import clienteAxios from '../../config/axios';
import './tables.css';


function Cliente({ cliente }) {
	
	// extraer los valores
	const { _id, nombre, apellidos, email, telefono } = cliente;
	
	
	// Eliminar cliente
	const eliminarCliente = idCliente => {
		Swal.fire({
			title: '¿Estas seguro?',
			text: "Un cliente eliminado no se puede recuperar",
			type: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'Cancelar'
		}).then((result) => {
			if (result.value) {
                // Llamado a axios
                clienteAxios.delete(`/clientes/${idCliente}`)
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

		
              <tr className="info-cliente">
                <td>{nombre} {apellidos}</td>
                <td>{email}</td>
                <td>{telefono}</td>
                <td>0</td>
                <td>0</td>
              </tr>
		
	) 
}
export default Cliente;
