// TicketsModalDetail.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'

function TicketsModalDetail({show,onHide,ticket_no,book_ref,passenger_id,passenger_name}) {


 return(
  <>
    <Modal  show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Ticket Number:{ticket_no}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup.Item variant="success">Booking Reference: {book_ref}</ListGroup.Item>
          <ListGroup.Item variant="info">Passenger ID: {passenger_id}</ListGroup.Item>
          <ListGroup.Item variant="success">Passenger Name: {passenger_name}</ListGroup.Item>
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


export default TicketsModalDetail  