import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styles from './ToDoForm.module.css'

const ToDoForm = ({inputText,setInputText,todos, setTodos,setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    }
    const statusHandler = (e) => {
       setStatus(e.target.value);
    }
    return (
        <div>
            <Row>
                <Col>
                    <Row>
                    <Col lg='8' md='8' sm='12'>
                        <Form>
                            <div className={styles.fullForm}>
                                <Form.Group className={styles.ToDoForm}>
                                    <Form.Control onChange={inputTextHandler} className={styles.toDoWrite} type="text" value={inputText} placeholder="Add some notes" />
                                </Form.Group>
                                <Button onClick={submitTodoHandler} type="submit" className={styles.submitToDo}>
                                    <i className="fa-solid fa-plus"></i>
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col lg='4' md='4' sm='12'>
                    <Form.Select aria-label="Default select example" onChange={statusHandler}>
                        <option>Select Type</option>
                        <option defaultValue="All" value="All">All</option>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                    </Form.Select>
                    </Col>
                    </Row>
                </Col>
            </Row>   
        </div>
    );
};

export default ToDoForm;