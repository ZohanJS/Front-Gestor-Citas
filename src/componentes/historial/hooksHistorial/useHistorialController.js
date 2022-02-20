import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import odontologoAxios from "../../../config/axios";
import { CRMContext } from "../../../context/CRMContext";
import { useParams } from 'react-router-dom';

export function useHistorialController(cita) {
    const { push } = useHistory()
    const [historial, guardarHistoriales] = useState([]);
    const id_cita = cita
    const [auth] = useContext(CRMContext);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      if (auth.token !== "") {
        const consultarAPI = async () => {
          setLoading(true)
          try {
            const historialConsulta = await odontologoAxios.get(
              `/api/observacion/${id_cita}`,
              {
                headers: {
                  Authorization: `Bearer ${auth.token}`,
                },
              }
            );
            guardarHistoriales(historialConsulta.data.observacion);
            setLoading(false)
          } catch (error) {
            setLoading(false)
            console.log("Error",error)
            if ((error.response.status = 500)) {
              push("/iniciar-sesion");
            }
          }
        };
        consultarAPI();
      } else {
        push("/iniciar-sesion");
      }
    }, [push,guardarHistoriales, auth]);
  
    if (!auth.auth) {
      push("/iniciar-sesion");
    }
  
    return { historial, loading }
  }
  
  