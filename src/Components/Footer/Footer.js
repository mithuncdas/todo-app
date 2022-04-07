import React from 'react';
import styles from  './Footer.module.css';
import { Col, Row, Button,Modal, Table } from "react-bootstrap";
import { useState } from 'react';
const Footer = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
             <Row>
                <Col lg='8' md='6' sm='12' className='d-flex justify-content-start ' style={{ lineHeight:'33px' }}>
                    Developed By  <a rel="noopener noreferrer" target="_blank" href="https://www.facebook.com/mithundas404/" className='ms-2'> Mithun Das</a>
                </Col>
                <Col lg='4' md='6' sm='12' className='d-flex justify-content-end'>
                    <Button size='sm' onClick={handleShow} className={styles.appInfo}>
                        <i className="fa-solid fa-info"></i>
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className={styles.aboutApp}>About App</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Table striped bordered hover>
                            
                            <tbody>
                                <tr>
                                    <th>Project</th>
                                    <td>Practice Project(01)</td>
                                </tr>
                                <tr>
                                    <th>App Name</th>
                                    <td>To-Do App</td>
                                </tr>
                                <tr>
                                    <th>App Technology</th>
                                    <td>React(using localstorage)</td>
                                </tr>
                                <tr>
                                    <th>Devloped By</th>
                                    <td>Mithun Das</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" size='sm' onClick={handleClose} >
                            Close
                        </Button>
                    </Modal.Footer>
                    </Modal>
                </Col>
              </Row>
        </div>
    );
};

export default Footer;