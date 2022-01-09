import React, {Fragment, useContext} from 'react';

// Routing
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*** Layout */
import Header from './componentes/layout/Header';
import Navegacion from './componentes/layout/Navegacion';

/** Componentes */
import Odontologos from './componentes/odontologos/Odontologos';
import NuevoOdontologo from './componentes/odontologos/NuevoOdontologo';
import EditarOdontologo from './componentes/odontologos/EditarOdontologo';

import Sedes from './componentes/sedes/Sedes';
import EditarSede from './componentes/sedes/EditarSede';
import NuevaSede from './componentes/sedes/NuevaSede';

import Pedidos from './componentes/pedidos/Pedidos';
import NuevoPedido from './componentes/pedidos/NuevoPedido';

import Login from './componentes/auth/Login';

import { CRMContext, CRMProvider } from './context/CRMContext';

function App() {

    // utilizar context en el componente
    const [ auth, guardarAuth ] = useContext(CRMContext);


    return (
      <Router>
          <Fragment>
            <CRMProvider value={[ auth, guardarAuth ]}>
              {/* <Header /> */}

              <div className="grid contenedor contenido-principal">
                  <Navegacion />

                  <main /* className="caja-contenido col-9" */>
                        <Switch>
                            <Route exact path="/" component={Odontologos} />
                            <Route exact path="/odontologos/nuevo" component={NuevoOdontologo} />
                            <Route exact path="/odontologos/editar/:id" component={EditarOdontologo} />

                            <Route exact path="/sedes" component={Sedes} />
                            <Route exact path="/sedes/nuevo" component={NuevaSede} />
                            <Route exact path="/sedes/editar/:id" component={EditarSede} />

                            <Route exact path="/pedidos" component={Pedidos} />
                            <Route exact path="/pedidos/nuevo/:id" component={NuevoPedido} />


                            <Route exact path="/iniciar-sesion" component={Login} />
                        </Switch>
                  </main>
              </div>
            </CRMProvider>
          </Fragment>
      </Router>
    )
}

export default App;