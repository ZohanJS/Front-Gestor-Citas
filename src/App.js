import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navegacion from './componentes/layout/Navegacion';
import Odontologos from './componentes/odontologos/Odontologos';
import EditarOdontologo from './componentes/odontologos/EditarOdontologo';
import Sedes from './componentes/sedes/Sedes';
import EditarSede from './componentes/sedes/EditarSede';
import NuevaSede from './componentes/sedes/NuevaSede';
import Pedidos from './componentes/pedidos/Pedidos';
import NuevoPedido from './componentes/pedidos/NuevoPedido';
import Login from './componentes/auth/Login';
import Registrarse from './componentes/auth/Registrarse';
import { CRMProvider } from './context/CRMContext';

function App() {
  return (
    <Router>
      <React.Fragment>
        <CRMProvider>
          <div className="grid contenedor contenido-principal">
            <Navegacion />
            <main>
              <Switch>
                <Route exact path="/" component={Odontologos} />
                <Route exact path="/odontologos/editar/:id" component={EditarOdontologo} />
                <Route exact path="/sedes" component={Sedes} />
                <Route exact path="/sedes/nuevo" component={NuevaSede} />
                <Route exact path="/sedes/editar/:id" component={EditarSede} />
                <Route exact path="/pedidos" component={Pedidos} />
                <Route exact path="/pedidos/nuevo/:id" component={NuevoPedido} />
                <Route exact path="/registro" component={Registrarse} />
                <Route exact path="/iniciar-sesion" component={Login} />
              </Switch>
            </main>
          </div>
        </CRMProvider>
      </React.Fragment>
    </Router>
  )
}

export default App;
