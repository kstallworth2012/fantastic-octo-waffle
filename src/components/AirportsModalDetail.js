// AirportsModalDetail.js

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'

function AirportsModalDetail({show,onHide,airport_code ,airport_name,city, timezone }){

console.log("==========AirportsModalDetail==============")

 return(
  <>
    <Modal  show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Airport Name:{airport_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup.Item variant="success">Airport Code: {airport_code}</ListGroup.Item>
          <ListGroup.Item variant="info">Airport City: {city}</ListGroup.Item>
          <ListGroup.Item variant="success">Airport Time Zone: {timezone}</ListGroup.Item>
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

export default AirportsModalDetail