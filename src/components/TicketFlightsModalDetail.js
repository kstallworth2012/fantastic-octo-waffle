// TicketFlightsModalDetail.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'

function TicketFlightsModalDetail({show,onHide,ticket_no,flight_id,fare_conditions,amount}){

 return(
   <>
    <Modal  show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Ticket Number:{ticket_no}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup.Item variant="success">Flight ID: {flight_id}</ListGroup.Item>
          <ListGroup.Item variant="info">Fare Conditions: {fare_conditions}</ListGroup.Item>
          <ListGroup.Item variant="success">Fare Amount: {amount}</ListGroup.Item>
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

export default TicketFlightsModalDetail