import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import styles from './ToDoForm.module.css'

const ToDoForm = () => {
    return (
        <div>
           
                <Row>
                    <Col>
                        <Row>
                        <Col lg='8' md='8' sm='12'>
                            <Form>
                                <div className={styles.fullForm}>
                                    <Form.Group className={styles.ToDoForm}>
                                        <Form.Control className={styles.toDoWrite} type="text" placeholder="Add some notes" />
                                    </Form.Group>
                                    <Button type="submit" className={styles.submitToDo}>
                                        <i className="fa-solid fa-plus"></i>
                                    </Button>
                                </div>
                            </Form>
                        </Col>
                        <Col lg='4' md='4' sm='12'>
                        <Form.Select aria-label="Default select example">
                            <option>Select Type</option>
                            <option value="All">All</option>
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