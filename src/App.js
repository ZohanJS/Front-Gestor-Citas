import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navegacion from './componentes/layout/Navegacion';
import Odontologos from './componentes/odontologos/Odontologos';
import EditarOdontologo from './componentes/odontologos/EditarOdontologo';
import NuevoOdontologo from './componentes/odontologos/NuevoOdontologo';

import Sedes from './componentes/sedes/Sedes';
import EditarSede from './componentes/sedes/EditarSede';
import NuevaSede from './componentes/sedes/NuevaSede';

import Cupos from './componentes/cupos/Cupos';
import EditarCupo from './componentes/cupos/EditarCupo';
import NuevoCupo from './componentes/cupos/NuevoCupo';

import Horarios from './componentes/horario/Horarios';

import Historial from './componentes/historial/historiales';
import NuevoHistorial from "./componentes/historial/NuevoHistorial";

import CitasOdontologo from './componentes/CitasOdontologo/Citas';

import Pedidos from './componentes/pedidos/Pedidos';
import NuevoPedido from './componentes/pedidos/NuevoPedido';
import Login from './componentes/auth/Login';
import Restablecer_contraseña from './componentes/auth/Restablecer_contraseña';
import Restablecer_contraseña1 from './componentes/auth/Restablecer_contraseña1';
import Registrarse from './componentes/auth/Registrarse';
import { CRMProvider } from './context/CRMContext';
import Citas from './componentes/Citas/Citas';
import NuevaCita from './componentes/Citas/NuevaCita';
import Inicio from './componentes/layout/Inicio';
import Perfil from './componentes/Perfil/Perfil';
import EditarCita from './componentes/Citas/EditarCita'
import EditarPerfil from './componentes/Perfil/EditarPerfil';
import EditarContraseña from './componentes/Perfil/EditarContraseña';
import Docs from './componentes/Docs/Docs';

function App() {
  return (
    <Router>
      <React.Fragment>
        <CRMProvider>
          <div className="grid contenedor contenido-principal">
            <Navegacion />
            <main>
              <Switch>
                <Route exact path="/" component={Inicio} />
                <Route exact path="/odontologos" component={Odontologos} />
                <Route exact path="/odontologos/editar" component={EditarOdontologo} />
                <Route exact path="/odontologos/nuevo" component={NuevoOdontologo} />
                <Route exact path="/sedes" component={Sedes} />
                <Route exact path="/sedes/nuevo" component={NuevaSede} />
                <Route exact path="/sedes/editar/" component={EditarSede} />
                <Route exact path="/horario" component={Horarios} />
                <Route exact path="/pedidos/nuevo/:id" component={NuevoPedido} />
                <Route exact path="/restablecer_contraseña" component={Restablecer_contraseña} />
                <Route exact path="/api/password-reset/:id/:token" component={Restablecer_contraseña1} />
                <Route exact path="/registro" component={Registrarse} />
                <Route exact path="/iniciar-sesion" component={Login} />
                <Route exact path="/cupos" component={Cupos} />
                <Route exact path="/cupos/nuevo" component={NuevoCupo} />
                <Route exact path="/cupos/editar/" component={EditarCupo} />
                <Route exact path="/citas" component={Citas} />
                <Route exact path="/citasOdondologo" component={CitasOdontologo} />
                <Route exact path="/citas/nueva" component={NuevaCita} />
                <Route exact path="/citas/editar" component={EditarCita} />
                <Route exact path="/perfil" component={Perfil} />
                <Route exact path="/perfil/editar" component={EditarPerfil} />
                <Route exact path="/perfil/editar/password" component={EditarContraseña} />
                <Route exact path="/docs" component={Docs} />
                <Route exact path="/historial/:idCita" component={Historial} />
                <Route exact path="/historial/nuevo/:idCita" component={NuevoHistorial} />
                /restabler-contraseña
              </Switch>
            </main>
          </div>
        </CRMProvider>
      </React.Fragment>
    </Router>
  )
}

export default App;
