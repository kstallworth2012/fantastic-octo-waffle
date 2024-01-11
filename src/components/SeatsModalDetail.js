// SeatsModalDetail.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'

function SeatsModalDetail({show,onHide,aircraft_code,seat_no,fare_conditions}){


       
        return(
   <>
    <Modal  show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Seat Number:{seat_no}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
          <ListGroup.Item variant="success">Aircraft Code: {aircraft_code}</ListGroup.Item>
          <ListGroup.Item variant="info">Seat Number: {seat_no} </ListGroup.Item>
          <ListGroup.Item variant="success">Fare Conditions: {fare_conditions}</ListGroup.Item>
        </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Close
          </Button>
          <Button variant="primary" onClick={onHide}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
     ) 
           
}


 export default SeatsModalDetail