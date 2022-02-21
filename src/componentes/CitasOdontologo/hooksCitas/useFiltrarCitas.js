import { useState, useEffect, useContext } from 'react'

export function useFiltrarCitas(citas){
    const [sedeSeleccionada, guardarSedeSeleccionada] = useState("")
    const [odontologoSeleccionado, guardarOdontologoSeleccionado] = useState("")
    const [tipoCitaSeleccionada, guardarTipoCitaSeleccionada] = useState("")
    const [fechaSeleccionada, guardarFechaSeleccionada] = useState("")
    const [citasFiltradas, guardarCitasFiltradas] = useState(citas)
    console.log("1",citasFiltradas)
    console.log("2", citas)

    function cambiarSede(event){
        guardarSedeSeleccionada(event.target.value)
        
    }

    function cambiarOdontologo(event){
        guardarOdontologoSeleccionado(event.target.value)
    }

    function cambiarTipoCita(event){
        guardarTipoCitaSeleccionada(event.target.value)
    }

    function cambiarFecha(event){
        console.log(event.target.value)
        guardarFechaSeleccionada(event.target.value)
    }
    
    function filtrar(){
        let nuevaLista = citas
        if(sedeSeleccionada){
            nuevaLista = [...nuevaLista.filter(cita => cita.idSede._id === sedeSeleccionada)]
        }
        if(tipoCitaSeleccionada){
            nuevaLista = [ ...nuevaLista.filter(cita => cita.tipoCita._id === tipoCitaSeleccionada)]
        }
        if(odontologoSeleccionado){
            nuevaLista = [ ...nuevaLista.filter(cita => cita.idOdontologo === odontologoSeleccionado)]
        }
        if(fechaSeleccionada){
            nuevaLista = [ ...nuevaLista.filter(cita => cita.idHorario.fecha === fechaSeleccionada)]
        }

        guardarCitasFiltradas(nuevaLista)
    }
    useEffect(() => {
        if(citas){
            guardarCitasFiltradas(citas)
        }
    },[citas] )
    return { citasFiltradas, cambiarTipoCita, cambiarOdontologo, cambiarSede, cambiarFecha, filtrar}
}   