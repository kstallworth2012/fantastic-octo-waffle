import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup'


function FlightViewModalDetail({show,onHide,actual_arrival,
                actual_arrival_local,
                actual_departure,
                actual_departure_local,
                actual_duration,
                aircraft_code,
                arrival_airport,arrival_airport_name,arrival_city,
                departure_airport,
                departure_airport_name,
                departure_city,
                flight_id,
                flight_no,
                status,
                scheduled_arrival,
                scheduled_arrival_local,
                scheduled_departure,
                scheduled_departure_local}){
	
	return(

	<>
    <Modal  show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Arrival Airport Name:{arrival_airport_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
        <ListGroup.Item variant="success">{actual_arrival}</ListGroup.Item>
         <ListGroup.Item variant="info">{actual_arrival_local}</ListGroup.Item>
         <ListGroup.Item variant="success">{actual_departure}</ListGroup.Item>
         <ListGroup.Item variant="info">{actual_departure_local}</ListGroup.Item>
         <ListGroup.Item variant="success">{actual_duration}</ListGroup.Item>
         <ListGroup.Item variant="info">{aircraft_code}</ListGroup.Item>
        <ListGroup.Item variant="success">{arrival_airport}</ListGroup.Item>
         <ListGroup.Item variant="info">{arrival_city}</ListGroup.Item>
        <ListGroup.Item variant="success">{departure_airport}</ListGroup.Item>
         <ListGroup.Item variant="info">{departure_airport_name}</ListGroup.Item>
         <ListGroup.Item variant="success">{departure_city}</ListGroup.Item>
        <ListGroup.Item variant="info">{flight_id}</ListGroup.Item>
        <ListGroup.Item variant="success">{flight_no}</ListGroup.Item>
         <ListGroup.Item variant="info">{status}</ListGroup.Item>
         <ListGroup.Item variant="success">{scheduled_arrival}</ListGroup.Item>
         <ListGroup.Item variant="info">{scheduled_arrival_local}</ListGroup.Item>
         <ListGroup.Item variant="success">{scheduled_departure}</ListGroup.Item>
         <ListGroup.Item variant="info">{scheduled_departure_local}</ListGroup.Item>
        <ListGroup.Item variant="success"></ListGroup.Item>
         <ListGroup.Item variant="info"></ListGroup.Item>
        <ListGroup.Item variant="info"></ListGroup.Item>
         <ListGroup.Item variant="success"></ListGroup.Item>
         <ListGroup.Item variant="info"></ListGroup.Item>
         <ListGroup.Item variant="success"></ListGroup.Item>
         <ListGroup.Item variant="info"></ListGroup.Item>
        <ListGroup.Item variant="success"></ListGroup.Item>
         <ListGroup.Item variant="info"></ListGroup.Item>
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


export default FlightViewModalDetail


