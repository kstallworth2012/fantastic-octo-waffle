// BoardingPassesModalDetail.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'


function BoardingPassesModalDetail({show,onHide,ticket_no,flight_id,boarding_no,seat_no}){
 return(
  <>
    <Modal  show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Ticket Number:{ticket_no}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup.Item variant="success">FlightId: {flight_id}</ListGroup.Item>
          <ListGroup.Item variant="info">Boarding Number: {boarding_no}</ListGroup.Item>
          <ListGroup.Item variant="success">Seat Number: {seat_no}</ListGroup.Item>
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

export default BoardingPassesModalDetail