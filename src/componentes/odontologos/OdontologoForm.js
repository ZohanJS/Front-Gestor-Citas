import React from 'react';
import { Form, Input , Row, Button, Label, FormGroup, Col} from 'reactstrap';


export function OdontologoForm({ handleSubmit, handleChange, validarOdontologo, odontologo, buttonText }){
  return (
    <div >
      <Form onSubmit={handleSubmit}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="nombre">
              Nombre
            </Label>
            <Input
              id="nombre"
              name="nombre"
              placeholder="Nombres"
              type="text"
              value={odontologo.nombre}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>      
        <Col md={6}>
          <FormGroup>
            <Label for="apellidos">
              Apellidos
            </Label>
            <Input
              id="apellidos"
              name="apellidos"
              placeholder="Apellidos"
              type="text"
              value={odontologo.apellidos}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>      
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="telefono">
              Teléfono
            </Label>
            <Input
              id="telefono"
              name="telefono"
              placeholder="Teléfono"
              value={ odontologo.telefono } 
              type="number"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="documento">
              Número Documento
            </Label>
            <Input
              id="documento"
              name="documento"
              placeholder="Número Documento"
              type="number"
              value={odontologo.documento}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>      
      </Row>
      <Row form>       
        <Col md={6}>
          <FormGroup>
            <Label for="fechaNacimiento">
              Fecha de nacimiento
            </Label>
            <Input
              id="fechaNacimiento"
              name="fechaNacimiento"
              placeholder="Fecha de nacimiento"
              type="date"
              value={odontologo.fechaNacimiento}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>      
        <Col md={6}>
          <FormGroup>
            <Label for="email">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="Email"
              value={ odontologo.email } 
              type="email"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>   
      </Row>

      <Row form>       
        <Col md={6}>
          <FormGroup>
            <Label for="fechaNacimiento">
              Contraseña
            </Label>
            <Input
              id="password"
              name="password"
              placeholder="Contraseña"
              type="password"
              value={odontologo.password}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>      
        <Col md={3}>        
        <FormGroup >
          <Label for="idEspecializacion">
          Especialización
          </Label>
          <Input
            id="idEspecializacion"
            name="idEspecializacion"
            type="select"
          >
            <option value={odontologo.idEspecializacion}>Ortodoncia </option>
              
          </Input>
        </FormGroup>  
        </Col>  
        <Col md={3}>        
        <FormGroup >
          <Label for="idSede">
            Sede
          </Label>
          <Input
            id="idSede"
            name="idSede"
            type="select"
          >
            <option value={odontologo.idSede}>Neiva </option>
              
          </Input>
        </FormGroup>  
        </Col>   
      </Row>
      
      
      <Button
        color="primary"
      >
        {buttonText}
      </Button>
    </Form>
  </div>
       
  )
}
///
///<form onSubmit={handleSubmit}>
///<legend>Datos basicos</legend>
///
///<div className="input-group">
///  <label>Nombres:</label>
///  <input value={odontologo.nombre} type="text" placeholder="Nombres" name="nombre" onChange={handleChange} />
///</div>
///{/*<select>
///  {sedes.map(sede => <option value={sede.id}>{sede.nombre}</option>)}
///</select>*/}
///<div className="input-group">
///  <label>Apellidos:</label>
///  <input value={odontologo.apellidos} type="text" placeholder="Apellidos" name="apellidos" onChange={handleChange} />
///</div>
///<div className="input-group">
///  <label>Teléfono:</label>
///  <input value={odontologo.telefono} type="text" placeholder="Teléfono" name="telefono" onChange={handleChange} />
///</div>
///<div className="input-group">
///  <label>Número Documento:</label>
///  <input value={odontologo.documento} type="text" placeholder="Documento" name="documento" onChange={handleChange} />
///</div>
///<div className="input-group">
///  <label>Fecha de nacimiento:</label>
///  <input value={odontologo.fechaNacimiento} type="date" placeholder="Fecha de nacimiento" name="fechaNacimiento" onChange={handleChange} />
///</div>
///<div className="input-group">
///  <label>Email:</label>
///  <input value={odontologo.email} type="email" placeholder="Email" name="email" onChange={handleChange} />
///</div>
///<div className="input-group">
///  <label>Contraseña:</label>
///  <input value={odontologo.password} type="password" placeholder="Contraseña" name="password" onChange={handleChange} />
///</div>
///<div className="input-group">
///  <label>Especialización:</label>
///  <input value={odontologo.idEspecializacion} type="text" placeholder="id especialización" name="idEspecializacion" />
///</div>
///<div className="input-group">
///  <label>Sede:</label>
///  <input value={odontologo.idSede} type="text" placeholder="id sede" name="idSede" />
///</div>
///<div className="enviar">
///  <button className="btn btn-azul" disabled={validarOdontologo}>{buttonText}</button>
///</div>
///</form>
///
///