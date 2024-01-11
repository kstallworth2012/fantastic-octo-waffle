// BookingsModalDetail.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'

function BookingsModalDetail({show,onHide,book_ref,total_amount,book_date},){
 return(

   <>
    <Modal  show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Reference:{book_ref}</Modal.Title>
        </Modal.Header>
        <Modal.Body>          
              <ListGroup.Item variant="sucess">Booking Date: {book_date}</ListGroup.Item>
              <ListGroup.Item variant="info">Total Amount: {total_amount}</ListGroup.Item>
              <ListGroup.Item variant="info"></ListGroup.Item>
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

export default BookingsModalDetail