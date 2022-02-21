import React from "react";
import './Docs.css'
import img from './Guías how fa5cd/Untitled.png'
import img1 from './Guías how fa5cd/Untitled 1.png'
import img2 from './Guías how fa5cd/Untitled 2.png'

const Docs = () => {
  return (
    <div className="docs_wrapper">
      <article id="25648fa2-b9bb-4d73-b501-82b71ff267ed" className="page sans">
        <header>
          <h1 className="page-title">Guías how-to</h1>
        </header>
        <div className="page-body">
          <h2 id="92cbf34b-d1c8-4364-b3d3-8142afac65c4" className>
            Índice
          </h2>
          <nav
            id="06f5dbf6-719a-4ae3-b5ac-2a5a4ac45b66"
            className="block-color-gray table_of_contents"
          >
            <div className="table_of_contents-item table_of_contents-indent-0">
              <a
                className="table_of_contents-link"
                href="#92cbf34b-d1c8-4364-b3d3-8142afac65c4"
              >
                Índice
              </a>
            </div>
            <div className="table_of_contents-item table_of_contents-indent-0">
              <a
                className="table_of_contents-link"
                href="#a8607429-56c7-42dc-ac2a-3843b36314fa"
              >
                Introducción
              </a>
            </div>
            <div className="table_of_contents-item table_of_contents-indent-0">
              <a
                className="table_of_contents-link"
                href="#a1a851b9-feba-4d05-ba5c-ec8392b5c95f"
              >
                Componentes
              </a>
            </div>
            <div className="table_of_contents-item table_of_contents-indent-1">
              <a
                className=""
                href=""
              >
                1. Agregar sedes
              </a>
            </div>
            <div className="table_of_contents-item table_of_contents-indent-1">
              <a
                className="table_of_contents-link"
                href="#6e16010a-125f-49ff-afe6-1a9a68007289"
              >
                2. Crear perfil de odontólogo
              </a>
            </div>
            <div className="table_of_contents-item table_of_contents-indent-1">
              <a
                className="table_of_contents-link"
                href="#72e1264e-a07b-433d-b23f-f6518b7b533e"
              >
                3. Restablecer contraseña
              </a>
            </div>
            <div className="table_of_contents-item table_of_contents-indent-0">
              <a
                className="table_of_contents-link"
                href="#3249f3ce-b6d2-409b-9f12-74c0f9592a18"
              >
                Conclusiones
              </a>
            </div>
          </nav>
          <h1 id="a8607429-56c7-42dc-ac2a-3843b36314fa" className>
            Introducción{" "}
          </h1>
          <p id="4fe9d0eb-8092-4cc7-860a-e1f5ee9451d3" className>
            En este documento explicaremos, paso a paso, el cómo de algunos de
            nuestros procesos dentro del Gestor de Citas.
          </p>
          <p id="bcf4533b-4e28-4aae-90e0-85547d54a97e" className>
            Previamente es necesario el registro a la plataforma. Para algunos
            de los procesos también es requerido ser administrador, si tienes
            alguna duda, contacta con nuestro{" "}
            <a href="https://twitter.com/lunago28">soporte al cliente</a>, con
            gusto te tenderemos.
          </p>
          <h1 id="a1a851b9-feba-4d05-ba5c-ec8392b5c95f" className>
            Componentes
          </h1>
          <h2 id="21299c22-8687-4f21-9112-fbe429568091" className>
            1. Agregar sedes
          </h2>
          <div className="indented">
            <p id="555560e7-d2be-4dd0-b03a-6218328b7bbc" className>
              Si necesitas agregar una nueva sede al gestor:
            </p>
            <p id="e722db41-e1d7-46df-bb35-24b843478a05" className>
              Pasos previos:
            </p>
            <ol
              type={1}
              id="831ffd5f-31dc-4bc4-8d58-9e7b608ae64a"
              className="numbered-list"
              start={1}
            >
              <li>Tener una cuenta de administrador.</li>
            </ol>
            <ol
              type={1}
              id="d832e1d7-490a-4e63-ad95-ec3609160c19"
              className="numbered-list"
              start={2}
            >
              <li>Ingresar a la plataforma con dicha cuenta.</li>
            </ol>
            <ol
              type={1}
              id="f99748af-3e76-4e5e-b737-c07723bef777"
              className="numbered-list"
              start={3}
            >
              <li>
                En la parte izquierda de la pantalla, justo debajo de{" "}
                <strong>DentalCare </strong>podemos encontrar el apartado de{" "}
                <em>sedes</em>. Justo ahí es donde debemos ubicarnos.
              </li>
            </ol>
            <p id="3d3ef0c3-590a-4f3a-8bfd-a3dd04b107e6" className>
              Pasos para agregar una nueva sede:
            </p>
            <ol
              type={1}
              id="ba3cb8ac-8b0a-4672-897b-36495fcb9e1e"
              className="numbered-list"
              start={1}
            >
              <li>
                Nos ubicamos en <em>Sedes. </em>donde podemos visualizar las
                sedes disponibles. Justo arriba de la tabla, en la parte
                derecha, encontramos un botón (le damos click):
                <figure
                  id="fa5cd15b-b1e0-413e-b4fc-dfbc7f872e2e"
                  className="image"
                >
                  <a href="Gui%CC%81as%20how%20fa5cd/Untitled.png">
                    <img
                      style={{ width: 820 }}
                      src={img}
                    />
                  </a>
                </figure>
              </li>
            </ol>
            <ol
              type={1}
              id="c246bb96-17c1-46f0-9af2-9c4eb3e0d135"
              className="numbered-list"
              start={2}
            >
              <li>
                Esto nos redirigirá a{" "}
                <a href="http://gestordecitas.com/sedes/nuevo">
                  gestordecitas.com/sedes/nuevo
                </a>{" "}
                donde veremos los campos necesarios para crear una nueva sede.
                Nos pedirá:
                <ol
                  type="a"
                  id="651c10a0-def8-46eb-97c5-b2f8d3885c7a"
                  className="numbered-list"
                  start={1}
                >
                  <li>Nombre de la sede</li>
                </ol>
                <ol
                  type="a"
                  id="d3f00d0b-e428-4d17-ad6f-61f02ce62ed7"
                  className="numbered-list"
                  start={2}
                >
                  <li>Dirección de la sede</li>
                </ol>
                <ol
                  type="a"
                  id="13c4d00b-663b-4966-94a6-ed7ded13ead5"
                  className="numbered-list"
                  start={3}
                >
                  <li>Teléfono de la sede</li>
                </ol>
                <ol
                  type="a"
                  id="64e49812-dac1-4857-b501-b572c00c87ea"
                  className="numbered-list"
                  start={4}
                >
                  <li>
                    Estado de la sede (si está prestando servicio o está
                    inactiva)
                  </li>
                </ol>
                <ol
                  type="a"
                  id="4b6cf524-9ca9-4fa1-a2d6-3fafe2618936"
                  className="numbered-list"
                  start={5}
                >
                  <li>Hora de inicio (a qué hora abren)</li>
                </ol>
                <ol
                  type="a"
                  id="1d328bd1-70e7-4b0e-b152-e7bd73aa6323"
                  className="numbered-list"
                  start={6}
                >
                  <li>Hora de fin (a qué hora cierran)</li>
                </ol>
                <p id="6514b5aa-c24f-4a3c-85e3-8d67de7edb74" className>
                  Rellenamos esta información.
                </p>
              </li>
            </ol>
            <ol
              type={1}
              id="bc7b7449-dcce-4701-acc3-6b1ed60e7424"
              className="numbered-list"
              start={3}
            >
              <li>
                Posteriormente, podremos darle click a <em>Agregar sede</em> el
                botón a la derecha, lo que nos redirigirá a la tabla inicial{" "}
                <a href="http://gestordecitas.com/sedes/nuevo">
                  gestordecitas.com/sedes
                </a>
                .{" "}
              </li>
            </ol>
            <ol
              type={1}
              id="22dcec55-f4fe-471d-bc8c-ba6b7ae29185"
              className="numbered-list"
              start={4}
            >
              <li>
                ¡Listo! ya tenemos nuestra nueva sede agregada. Puedes verla al
                final de la tabla.
              </li>
            </ol>
            <p id="01a6e497-1da5-4962-98a7-d4c58829626f" className></p>
          </div>
          <h2 id="6e16010a-125f-49ff-afe6-1a9a68007289" className>
              2. Crear perfil de odontólogo
          </h2>
          <div className="indented">
            <p id="a38eb55e-8fe5-46b9-8108-aed094c2bb1c" className>
              Si necesitas crear un nuevo odontólogo:
            </p>
            <p id="b95b4e11-ce4b-437b-aae0-f22768d6ba57" className>
              Pasos previos:
            </p>
            <ol
              type={1}
              id="b07dd2ab-1ed3-4e33-8623-8a99340aa9e6"
              className="numbered-list"
              start={1}
            >
              <li>Tener una cuenta de administrador.</li>
            </ol>
            <ol
              type={1}
              id="abf9fa5b-02d7-4ba2-b750-0a746f6f5d40"
              className="numbered-list"
              start={2}
            >
              <li>Ingresar a la plataforma con dicha cuenta.</li>
            </ol>
            <ol
              type={1}
              id="5e8fc858-2d7e-45fe-a4a4-d76c07b5e34c"
              className="numbered-list"
              start={3}
            >
              <li>
                En la parte izquierda de la pantalla, justo debajo de{" "}
                <em>Sedes</em>
                <strong> </strong>podemos encontrar el apartado de{" "}
                <em>Odontólogos</em>. Justo ahí es donde debemos ubicarnos.
              </li>
            </ol>
            <p id="1570e19a-2f12-4a69-9202-1722a18b0a45" className>
              Pasos para crear un nuevo odontólogo:
            </p>
            <ol
              type={1}
              id="11f6e3e3-204a-4ba0-8b4c-aa1030c758a8"
              className="numbered-list"
              start={1}
            >
              <li>
                Estando en
                <a href="http://gestordecitas.com/odontologos">
                  gestordecitas.com/odontologos
                </a>{" "}
                podremos ver los odontólogos previamente inscritos. Justo arriba
                de la tabla, en la parte derecha, encontramos un botón (le damos
                click):
              </li>
            </ol>
            <figure id="3bc906e8-1910-41e2-8ca4-c6c6383bd812" className="image">
              <a href="Gui%CC%81as%20how%20fa5cd/Untitled%201.png">
                <img
                  style={{ width: 820 }}
                  src={img1}
                />
              </a>
            </figure>
            <ol
              type={1}
              id="0034bbf0-1ccb-4dbc-a23e-e17ad4acd2de"
              className="numbered-list"
              start={2}
            >
              <li>
                Esto nos redirigirá a una ventana con varios campos requeridos
                para crear el odontólogo nuevo, tendremos que llenarlos todos:
                <ol
                  type="a"
                  id="685e06c2-15df-4976-bf43-7ecbeca2e86a"
                  className="numbered-list"
                  start={1}
                >
                  <li>Nombres</li>
                </ol>
                <ol
                  type="a"
                  id="177d92c1-4a97-4b92-9202-5c660b15a8ea"
                  className="numbered-list"
                  start={2}
                >
                  <li>Apellidos</li>
                </ol>
                <ol
                  type="a"
                  id="f24ef95c-a779-4476-bd58-5fbbb37b0e33"
                  className="numbered-list"
                  start={3}
                >
                  <li>Teléfono</li>
                </ol>
                <ol
                  type="a"
                  id="c047a0a5-3a23-405a-b4b0-1768cf1a7730"
                  className="numbered-list"
                  start={4}
                >
                  <li>Estado (si está activo o inactivo)</li>
                </ol>
                <ol
                  type="a"
                  id="5108a9ef-eb87-440c-b25e-b566a11b58d0"
                  className="numbered-list"
                  start={5}
                >
                  <li>Número de identificación</li>
                </ol>
                <ol
                  type="a"
                  id="61dff337-6bed-462e-b16e-4edc6540eb3d"
                  className="numbered-list"
                  start={6}
                >
                  <li>Fecha de nacimiento</li>
                </ol>
                <ol
                  type="a"
                  id="2581868e-8855-4e8d-9f65-b1dfb4d6c028"
                  className="numbered-list"
                  start={7}
                >
                  <li>Correo electrónico</li>
                </ol>
                <ol
                  type="a"
                  id="d1b5eaff-0643-4e25-83a7-78b38e84a3cb"
                  className="numbered-list"
                  start={8}
                >
                  <li>Especialización </li>
                </ol>
                <ol
                  type="a"
                  id="3adfee46-d504-4982-a3f5-1f5c097741c2"
                  className="numbered-list"
                  start={9}
                >
                  <li>Sede en la que se encuentra</li>
                </ol>
                <ol
                  type="a"
                  id="80bb5afa-5e08-467b-a04b-e90f73b2d581"
                  className="numbered-list"
                  start={10}
                >
                  <li>Y la contraseña que usará para acceder a su cuenta.</li>
                </ol>
                <p id="b1e8d126-5e40-441f-992f-18de03c6297b" className>
                  Luego de llenar la información, le damos en <em>Agregar.</em>
                </p>
              </li>
            </ol>
            <ol
              type={1}
              id="cd81285c-1d87-43eb-b602-71e9428658b2"
              className="numbered-list"
              start={3}
            >
              <li>
                ¡Listo! Este botón nos redirigirá a de nuevo a donde empezamos:{" "}
                <a href="http://gestordecitas.com/odontologos">
                  gestordecitas.com/odontologos
                </a>
                , donde podremos ver nuestro nuevo odontólogo en la parte final
                de la tabla.
              </li>
            </ol>
          </div>
          <h2 id="72e1264e-a07b-433d-b23f-f6518b7b533e" className>

             3. Restablecer contraseña

          </h2>
          <div className="indented">
            <p id="71c66b20-a442-4018-b7db-6e65a6cd4f5c" className>
              Hoy por hoy contamos con muchas cuentas en todo lado, y es muy
              probable que se nos olvide una contraseña, por lo cual, en nuestra
              plataforma, queremos contarte cómo restablecer la contraseña en
              caso de que la pierdas.
            </p>
            <p id="5e12c8b4-978f-4cc9-9c9d-59aa8f35d294" className>
              Pasos previos
            </p>
            <ol
              type={1}
              id="7dabf4d4-7d87-4c66-b344-37af7cbd68a8"
              className="numbered-list"
              start={1}
            >
              <li>
                Tener una cuenta: para esto solo debes ir a la parte de{" "}
                <em>Registrarse </em>y crear tu cuenta.
              </li>
            </ol>
            <p id="f7c88405-c7ec-42bd-8665-5386d0982225" className>
              Pasos para restablecer tu contraseña:
            </p>
            <ol
              type={1}
              id="bf4673f1-9657-4163-b0ef-eafc7ab16746"
              className="numbered-list"
              start={1}
            >
              <li>
                Nos ubicamos en la pantalla principal de nuestro gestor,{" "}
                <em>el login</em>.{" "}
              </li>
            </ol>
            <ol
              type={1}
              id="4eaa50b5-87bf-46fa-b90e-72a0883564b7"
              className="numbered-list"
              start={2}
            >
              <li>
                Debajo del campo <strong>Contraseña </strong>dice{" "}
                <em>Restablecer contraseña, </em>damos click allí.
              </li>
            </ol>
            <ol
              type={1}
              id="ca1a8e15-5e19-4637-9544-cebe563dc940"
              className="numbered-list"
              start={3}
            >
              <li>
                Al hacer eso, se nos redirigirá a una pantalla donde nos pide
                ingresar un correo, así que ingresamos el correo al cual
                deseamos restablecerle la contraseña. Y damos click en enviar.
              </li>
            </ol>
            <ol
              type={1}
              id="68ec1975-fe1d-4248-a628-7e2e2e7c92bb"
              className="numbered-list"
              start={4}
            >
              <li>
                Esto enviará un correo automatizado que genera un link único
                para que podamos realizar este proceso. Por lo que en este paso
                debemos dirigirnos al la bandeja de entrada del correo
                electrónico que ingresamos (ej. Gmail, Hotmail, Yahoo, etc).
                Recibiremos un correo como el siguiente:
              </li>
            </ol>
            <figure id="b4f36a6b-225b-4754-9cbc-5fa242a2a3ad" className="image">
              <a href="Gui%CC%81as%20how%20fa5cd/Untitled%202.png">
                <img
                  style={{ width: 820 }}
                  src={img2}
                />
              </a>
            </figure>
            <ol
              type={1}
              id="c96c70b1-9f53-4caf-973f-4941e1b5ff90"
              className="numbered-list"
              start={6}
            >
              <li>
                Abrimos el correo, y, dentro de él, podremos ver un link que nos
                redirigirá a una pantalla para restablecer nuestra contraseña.
              </li>
            </ol>
            <ol
              type={1}
              id="ed8ebbed-68ec-4988-8a9d-8d5a3f50e023"
              className="numbered-list"
              start={7}
            >
              <li>
                A continuación, rellenamos los campos con la nueva contraseña, y
                le damos en <em>enviar</em>.
              </li>
            </ol>
            <ol
              type={1}
              id="222bde6c-010a-4f37-b9f9-ec4465e246b1"
              className="numbered-list"
              start={8}
            >
              <li>
                ¡Listo! Ya nos podemos dirigir al login con nuestra nueva
                contraseña.
              </li>
            </ol>
          </div>
          <h1 id="3249f3ce-b6d2-409b-9f12-74c0f9592a18" className>
            Conclusiones
          </h1>
          <p id="c9219608-6cea-46db-bacc-e19c45e8c04c" className>
            Después de esta guía rápida, donde explicamos cómo agregar una sede;
            cómo crear un perfil de odontólogo; y cómo restablecer la contraseña
            de cualquier cuenta, esperamos que hayan quedado claros los
            conceptos y la manera de realizar los dichos procesos en nuestra
            plataforma. Si tienes alguna duda, puedes contactarnos en nuestros
            diferentes canales de atención al cliente, allí estaremos atentos a
            cualquier inquietud y/o sugerencia.
          </p>
          <p id="60fcbaa5-2b01-4b8b-9d04-074cc03d2e5b" className></p>
          <p id="b3125d35-3ab7-4ab7-b9fd-b0424c88e8ff" className></p>
        </div>
      </article>
    </div>
  );
};

export default Docs;
