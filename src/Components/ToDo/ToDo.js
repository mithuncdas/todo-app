import React from 'react';
import styles from './ToDo.module.css';
import { Col, Row, Button } from 'react-bootstrap';
const ToDo = ({ text, id, todos, setTodos, todo }) => {
    const deleteHandler = () => {
        setTodos(todos.filter((item) => item.id !== id));
    }
    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }));
    }
    return (
        <div className={styles.toDoList}>
            <Row>
                <Col lg='8' md='8' sm='8' xs='8' className='text'>
                    <p className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>{text}</p>
                </Col>
                <Col lg='4' md='4' sm='4' xs='4'>
                    <ul>
                        <li> <Button onClick={completeHandler} className={styles.toDoListButton}><i className="fa-solid fa-check"></i></Button> </li>
                        <li> <Button onClick={deleteHandler} className={styles.toDoListButton}><i className="fa-solid fa-trash-can"></i></Button> </li>
                    </ul>
                </Col>
            </Row>
        </div>
    );
};

export default ToDo;