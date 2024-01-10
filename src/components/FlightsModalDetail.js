// FlightsModalDetail.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';


function FlightsModalDetail({show,onHide,flight_id,flight_no,scheduled_departure,
                            scheduled_arrival,
                            departure_airport,arrival_airport,status,
                            aircraft_code,actual_departure,actual_arrival}){

 return(
  // Modal Structure -->
  <>
    <Modal  show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Flight Number:{flight_no}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Woohoo, you are reading this text in a modal!

      <ListGroup variant="flush">
      <ListGroup.Item variant="success">Flight ID: {flight_id}</ListGroup.Item>
      <ListGroup.Item variant="info">Scheduled Departure: {scheduled_departure}</ListGroup.Item>
      <ListGroup.Item variant="success">Scheduled Arrival: {scheduled_arrival}</ListGroup.Item>
      <ListGroup.Item variant="info">Departure Airport: {departure_airport}</ListGroup.Item>
      <ListGroup.Item variant="success">Arrival Airport: {arrival_airport}</ListGroup.Item>
      <ListGroup.Item variant="info">Flight Status: {status}</ListGroup.Item>
      <ListGroup.Item variant="sucess">Aircraft Code: {aircraft_code}</ListGroup.Item>
      <ListGroup.Item variant="info">Actual Departure: {actual_departure} </ListGroup.Item>
      <ListGroup.Item variant="sucess">Actual Arrival: {actual_arrival}</ListGroup.Item>
  

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


export default FlightsModalDetail