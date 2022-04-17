
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import ToDo from '../ToDo/ToDo'
import styles from './ToDoList.module.css'
const ToDoList = ({todos,setTodos,filterTodos}) => {
    return (
        <div>
            <Row>
                <Col lg='12' md='12' sm='12'>
                    {
                        filterTodos.map(todo => (
                            <ToDo key={todo.id} text={todo.text} id={todo.id} todo={ todo} todos={todos} setTodos={setTodos}></ToDo>
                        ))
                    }
                </Col>
            </Row>
        </div>
    );
};

export default ToDoList;