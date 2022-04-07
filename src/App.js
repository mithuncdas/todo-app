import {Card, Col, Container, Form, Row } from "react-bootstrap";
import Footer from './Components/Footer/Footer';
import ToDoForm from './Components/ToDoForm/ToDoForm';
import './App.css';
function App() {
  
  return (
    <div className="App">
      <Container>
        <Row className="justify-content-md-center">
          <Col lg='6' md="8" sm="12">
          <Card border="primary">
            <Card.Header className='text-center'>
              <Card.Title className='appName'>To-Do App</Card.Title>
            </Card.Header>
            <Card.Body>
              
              <ToDoForm></ToDoForm>
            </Card.Body>
            <Card.Footer>
              <Footer></Footer>
            </Card.Footer>
          </Card>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
