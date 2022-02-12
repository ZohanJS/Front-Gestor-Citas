import { useState, useEffect, useContext } from 'react'
import { useHistory } from "react-router-dom";
import odontologoAxios from "../../../config/axios";
import { CRMContext } from "../../../context/CRMContext";

export function usePerfilController() {
  const { push } = useHistory()
  const [perfil, guardarPerfil] = useState([]);
  const [auth] = useContext(CRMContext);
  if(auth.rol === "usuario" || auth.rol === "administrador" ){
    var url = `/api/auth/profile/${auth.uid}`;
    var key = "usuario";
  }
  else{
    var url = `/api/odontologo/${auth.uid}`;
    var key = "odontologo";
  }
    
  useEffect(() => {
    if (auth.token !== "") {
      const consultarAPI = async () => {
        try {
          const perfilConsulta = await odontologoAxios.get(
            url,
            {
              headers: {
                Authorization: `Bearer ${auth.token}`,
              },
            }
          );
          guardarPerfil(perfilConsulta.data[key]);
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

  return { perfil }
}

