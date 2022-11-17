import React from "react";
import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import "./visitantes.css";

export default class VisitantesVista extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <body id="fondo-visitante">
            <Container id="visitantes-container">
        <Row>
          <Col id="bienvenida">
            <h2 >
              ¡BIENVENIDO VISITANTE AL MUSEO PANÓPTICO!
            </h2>
          </Col>
        </Row>
        <Row>             
          <Col sm="10" xs="10"
           md={{ span: 4, offset: 2 }}
           lg={{ span: 4, offset: 2 }}
           xl={{ span: 4, offset: 2 }}>

            <Card id="existente-visitante">
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

            <Button id="btn-registrarse" variant="" type="submit">
              Registrarse
              </Button>             
            </Form>
            </Card>
          </Col>

          <Col sm="10" xs="10"
          md={{ span: 4, offset: 2 }}
          lg={{ span: 4, offset: 2 }}
          xl={{ span: 4, offset: 2 }}>
            
            <Card id="nuevo-visitante">
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

              <Form.Group >              
                <Form.Control type="" placeholder="Cédula" />
                <Form.Text id="cedula" className="">                  
                </Form.Text>               
              </Form.Group>
                
              <Form.Group >               
                <Form.Control type="" placeholder="Celular" />
                <Form.Text id="telefono" className="">                  
                </Form.Text>               
              </Form.Group>  

            <Button id="btn-crearcuenta" variant="" type="submit">
              Crear cuenta
              </Button>             
            </Form>
            </Card>
          </Col>         
        </Row>
        
      </Container>
        </body>
      
    );
  }
}
