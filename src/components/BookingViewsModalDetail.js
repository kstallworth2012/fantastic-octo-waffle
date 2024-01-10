import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'


function BookingViewsModalDetail({show,onHide,book_ref,
            ticket_no,
            passenger_id,
            passenger_name,
            fare_conditions,
            amount,
            scheduled_departure_local,
            scheduled_arrival_local,
            departure,
            arrival,
            status,
            seat_no}){
	
	return(

   <>
    <Modal  show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Referenc:{book_ref}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>

            <ListGroup.Item variant="success">{book_ref}</ListGroup.Item>
            <ListGroup.Item variant="info">{ticket_no}</ListGroup.Item>
            <ListGroup.Item variant="success">{passenger_id}</ListGroup.Item>
            <ListGroup.Item variant="info">{passenger_name}</ListGroup.Item>
            <ListGroup.Item variant="success">{fare_conditions}</ListGroup.Item>
            <ListGroup.Item variant="info">{amount}</ListGroup.Item>
            <ListGroup.Item variant="success">{scheduled_departure_local}</ListGroup.Item>
            <ListGroup.Item variant="info">{scheduled_arrival_local}</ListGroup.Item>
            <ListGroup.Item variant="success">{departure}</ListGroup.Item>
            <ListGroup.Item variant="info">{arrival}</ListGroup.Item>
            <ListGroup.Item variant="success">{status}</ListGroup.Item>
            <ListGroup.Item variant="info">{seat_no}</ListGroup.Item>

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

export default BookingViewsModalDetail