
import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import styles from './ToDoList.module.css'
const ToDoList = () => {
    return (
        <div>
            <Row>
                <Col lg='12' md='12' sm='12'>
                    <div className={ styles.toDoList}>
                        <Row>
                            <Col lg='8' md='8' sm='8' xs='8' className='text'>
                                <p>My morning meeting at 10.30</p>
                            </Col>
                            <Col lg='4' md='4' sm='4' xs='4'>
                                <ul>
                                    <li> <Button><i className="fa-solid fa-check"></i></Button> </li>
                                    <li> <Button><i className="fa-solid fa-trash-can"></i></Button> </li>
                                </ul>
                            </Col>
                        </Row>
                    </div> 
                    <div className={ styles.toDoList}>
                        <Row>
                            <Col lg='8' md='8' sm='8' xs='8' className='text'>
                                <p>My morning meeting at 10.30</p>
                            </Col>
                            <Col lg='4' md='4' sm='4' xs='4'>
                                <ul>
                                    <li> <Button><i className="fa-solid fa-check"></i></Button> </li>
                                    <li> <Button><i className="fa-solid fa-trash-can"></i></Button> </li>
                                </ul>
                            </Col>
                        </Row>
                    </div> 
                    <div className={ styles.toDoList}>
                        <Row>
                            <Col lg='8' md='8' sm='8' xs='8' className='text'>
                                <p>My morning meeting at 10.30</p>
                            </Col>
                            <Col lg='4' md='4' sm='4' xs='4'>
                                <ul>
                                    <li> <Button><i className="fa-solid fa-check"></i></Button> </li>
                                    <li> <Button><i className="fa-solid fa-trash-can"></i></Button> </li>
                                </ul>
                            </Col>
                        </Row>
                    </div> 
                    <div className={ styles.toDoList}>
                        <Row>
                            <Col lg='8' md='8' sm='8' xs='8' className='text'>
                                <p>My morning meeting at 10.30</p>
                            </Col>
                            <Col lg='4' md='4' sm='4' xs='4'>
                                <ul>
                                    <li> <Button><i className="fa-solid fa-check"></i></Button> </li>
                                    <li> <Button><i className="fa-solid fa-trash-can"></i></Button> </li>
                                </ul>
                            </Col>
                        </Row>
                    </div> 
                    <div className={ styles.toDoList}>
                        <Row>
                            <Col lg='8' md='8' sm='8' xs='8' className='text'>
                                <p>My morning meeting at 10.30</p>
                            </Col>
                            <Col lg='4' md='4' sm='4' xs='4'>
                                <ul>
                                    <li> <Button><i className="fa-solid fa-check"></i></Button> </li>
                                    <li> <Button><i className="fa-solid fa-trash-can"></i></Button> </li>
                                </ul>
                            </Col>
                        </Row>
                    </div> 
                    
                </Col>
            </Row>
        </div>
    );
};

export default ToDoList;