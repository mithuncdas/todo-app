import React from 'react';
import styles from './ToDo.module.css';
import { Col, Row, Button } from 'react-bootstrap';
const ToDo = ({text,id}) => {
    return (
        
            <div className={ styles.toDoList}>
                <Row>
                    <Col lg='8' md='8' sm='8' xs='8' className='text'>
                        <p className={styles.text}>{text}</p>
                    </Col>
                    <Col lg='4' md='4' sm='4' xs='4'>
                        <ul>
                            <li> <Button className={styles.toDoListButton}><i className="fa-solid fa-check"></i></Button> </li>
                            <li> <Button className={styles.toDoListButton}><i className="fa-solid fa-trash-can"></i></Button> </li>
                        </ul>
                    </Col>
                </Row>
            </div>  
        
    );
};

export default ToDo;