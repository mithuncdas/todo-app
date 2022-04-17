import {Card, Col, Container, Row } from "react-bootstrap";
import Footer from './Components/Footer/Footer';
import ToDoForm from './Components/ToDoForm/ToDoForm';
import ToDoList from "./Components/ToDoList/ToDoList";
import { useEffect, useState } from "react";
import './App.css';
function App() {

  
  //all state
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState(["All"]);
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when the app start
  useEffect(() => {
    getLocalTodos();
  },[])
  //use effect
  useEffect(() => {
      filteredHandler(); 
      saveLocalTodos();
  },[todos,status]);
  //functions  
  const filteredHandler = () =>{
    switch(status){
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Pending":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  //save to local storage function
  const saveLocalTodos = () => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const getLocalTodos = () =>{
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos",JSON.stringify([]));
    }
    else{
     let todoLocal = JSON.parse(localStorage.getItem("todos"));
     setTodos(todoLocal);
    }
  }

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
              
              <ToDoForm
                inputText={inputText}
                setInputText={setInputText} 
                todos={todos} 
                setTodos={setTodos}
                setStatus = {setStatus}
                
               >
               </ToDoForm>
              <ToDoList 
                todos={todos}
                setTodos={setTodos}
                filterTodos = {filteredTodos}
                ></ToDoList>
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
