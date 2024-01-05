// FlightsModalDetail.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';


function FlightsModalDetail({show,onHide,flight_no}){

 return(
  // Modal Structure -->
  <>
    <Modal  show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Flight Number:{flight_no}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
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