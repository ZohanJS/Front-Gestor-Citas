import React from 'react';
import { Form, Input , Row, Button, Label, FormGroup, Col} from 'reactstrap';


export function SedeForm({ handleSubmit, handleChange, validarSede, sede, buttonText }){
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
              placeholder="Nombre"
              type="text"
              value={sede.nombre}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>      
        <Col md={6}>
          <FormGroup>
            <Label for="direccion">
              Direccion
            </Label>
            <Input
              id="direccion"
              name="direccion"
              placeholder="Direccion"
              type="text"
              value={sede.direccion}
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
              value={ sede.telefono } 
              type="number"
              onChange={handleChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="horario">
              Horario
            </Label>
            <Input
              id="horario"
              name="horario"
              placeholder="Horario"
              type="text"
              value={sede.horario}
              onChange={handleChange}
            />
          </FormGroup>
        </Col>      
      </Row>
      <Row form>       
        <Col md={6}>
          <FormGroup>
            <Label for="estado">
              Estado
            </Label>
            <Input

              id="estado"
              name="estado"
              placeholder="Estado"
              type="select"
              value={sede.estado}
              onChange={handleChange}

              >

              <option value={true}>Activa </option>
              <option value={false}>Inactiva </option>
              
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