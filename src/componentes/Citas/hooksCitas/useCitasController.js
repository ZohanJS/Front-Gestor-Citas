import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import odontologoAxios from "../../../config/axios";
import { CRMContext } from "../../../context/CRMContext";

export function useCitasController() {
  const { push } = useHistory()
  const [citas, guardarCitas] = useState([]);
  const [auth] = useContext(CRMContext);
  const [loading, setLoading] = useState(true);
  if(auth.rol === "usuario" || auth.rol === "administrador" ){
    var url = `/api/cita/usuario/${auth.uid}`;
  }
  else{
    var url = `/api/cita/odontologo/${auth.uid}`;
  }
    
  useEffect(() => {
    if (auth.token !== "") {
      const consultarAPI = async () => {
        try {
          const citasConsulta = await odontologoAxios.get(
           url,
            {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }
          );
          guardarCitas(citasConsulta.data["citas"]);
          setLoading(false);
        } catch (error) {
          if ((error.response.status = 500)) {
            push("/iniciar-sesion");
          }
        }
      };
      consultarAPI();
    } else {
      push("/iniciar-sesion");
    }
  }, []);

  if (!auth.auth) {
    push("/iniciar-sesion");
  }

  return { citas }
}