import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import './visitantes.css'

export default class VisitantesVista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container id="visitantes-container">
        <Row>
          <Col>
            <h2 >
              ¡BIENVENIDO VISITANTE AL MUSEO PANÓPTICO!
            </h2>
          </Col>
        </Row>
        <Row>             
          <Col xs="8"
          md={{ span: 3, offset: 2 }}
          lg={{ span: 3, offset: 2 }}
          xl={{ span: 3, offset: 2 }}>
             <span>
            <h3>
              ¿Ya tengo una cuenta?
            </h3>
            <h4 >
              ¡Registrar asistencia!
            </h4>
            </span>
            
            <Form>   
             
              <Form.Group>      
                <Form.Label>Ingresa tu identificación</Form.Label>       
                <Form.Control type="" placeholder="Cédula" />
                <Form.Text id="cedula" className="">                  
                </Form.Text>               
              </Form.Group>             

            <Button variant="primary" type="submit">
              Registrarse
              </Button>             
            </Form>
            
          </Col>

          <Col xs="8"
          md={{ span: 3, offset: 2 }}
          lg={{ span: 3, offset: 2 }}
          xl={{ span: 3, offset: 2 }}>
            <span>
            <h3>
              ¿Eres nuevo visitante?
            </h3>
            <h4 >
              Crea una cuenta!
            </h4>
            </span>
            
            <Form>   
            <Form.Group>               
                <Form.Control type="" placeholder="Nombre completo" />
                <Form.Text id="nombre" className="">                  
                </Form.Text>               
              </Form.Group>

              <Form.Group>              
                <Form.Control type="" placeholder="Cédula" />
                <Form.Text id="cedula" className="">                  
                </Form.Text>               
              </Form.Group>
                
              <Form.Group>               
                <Form.Control type="" placeholder="Celular" />
                <Form.Text id="telefono" className="">                  
                </Form.Text>               
              </Form.Group>  

            <Button variant="primary" type="submit">
              Crear cuenta
              </Button>             
            </Form>
            
          </Col>         
        </Row>
        
      </Container>
    );
  }
}
