import React, {useState} from 'react';
import './tables.css';
import { useCuposController } from "../../componentes/cupos/hooksCupos/useCuposController";
import odontologoAxios from "../../config/axios";
import {CRMContext} from '../../context/CRMContext';
import {useContext} from "react";
import {Button} from 'reactstrap';


function HorarioOdontologo( {odontologo, closeModal} ) {
    const { cupos } = useCuposController();
    const [auth ] = useContext(CRMContext );
    let listaCupos = [];
    let date;

    function onChange(event) {
        
        if (!listaCupos.includes(event.target.value)){
            listaCupos = [...listaCupos,event.target.value]
        }else{
            listaCupos = listaCupos.filter(cupo=>cupo!==event.target.value)            
        }
    }
    function onChangeDate(event) {
        date = event.target.value 
        console.log("FECHA", date)
    } 
    const guardarHorario = idOdontologo => {

            const data = {
                idOdontologo,
                'idCupos': listaCupos.map(cupo=>({ cupo })),
                'fecha': date
            }
            odontologoAxios.post(`/api/horario/create`, data,{
                
            headers: {
                Authorization: `Bearer ${auth.token}`,
                },
            })
    }  
    
    return <div>
        <p>{`${odontologo.nombre} ${odontologo.apellidos}`}</p>
        <input onChange={onChangeDate} type='date' name='fecha' id='fecha' ></input>
        <div className="">
          <div className="">
            <table>
              <thead>
                <tr>
                  <th style={{color:'#000'}}>Hora Inicio</th>
                  <th style={{color:'#000'}}>Hora Fin</th>                  
                </tr>
              </thead>
              <tbody>
                {cupos.map((cupo) => (
                  <div key={cupo._id} > 
                       
                      <label>
                          <input onChange={onChange} type="checkbox" value={cupo._id}/> 
                          <span> {cupo.horaInicio} - </span>
                          <span> {cupo.horaFin} </span> </label>          
                  </div>
                ))}
              </tbody>
            </table>
            <button onClick={() => guardarHorario(odontologo._id) } className="btnIcon" id="guardar">Guardar</button>
            <button onClick={closeModal}>close</button>
          </div>
        </div>
        
        </div>
    
}
export default HorarioOdontologo