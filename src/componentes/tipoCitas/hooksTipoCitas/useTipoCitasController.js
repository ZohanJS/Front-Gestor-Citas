import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import odontologoAxios from "../../../config/axios";
import { CRMContext } from "../../../context/CRMContext";

export function useTipoCitasController() {
  const { push } = useHistory()
  const [tipoCitas, guardarTipoCita] = useState([]);
  const [auth] = useContext(CRMContext);

  useEffect(() => {
    if (auth.token !== "") {
      const consultarAPI = async () => {
        try {
          const tipoCitaConsulta = await odontologoAxios.get(
            "/api/tipoCita",
            {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }
          );
          console.log("DATAAA", tipoCitaConsulta.data.tipoCitas)
          guardarTipoCita(tipoCitaConsulta.data.tipoCitas);
        } catch (error) {
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
  }, []);

  if (!auth.auth) {
    push("/iniciar-sesion");
  }

  return { tipoCitas }
}

