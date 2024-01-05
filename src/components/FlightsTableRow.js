import {useState} from "react"
import Button from 'react-bootstrap/Button'
import FlightsModalDetail from './FlightsModalDetail'


function FlightsTableRow({flight_id,flight_no,
                            scheduled_departure,
                            scheduled_arrival,
                            departure_airport,arrival_airport,status,
                            aircraft_code,actual_departure,actual_arrival
                                }){

// For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


	 return(

  			<tr>

            <td><Button variant="primary" onClick={handleShow}>{flight_id}</Button></td>
            <td>{flight_no}</td>
            <td>{scheduled_departure}</td>
            <td>{scheduled_arrival}</td>
            <td>{departure_airport}</td>
            <td>{arrival_airport}</td>
            <td>{status}</td>
            <td>{aircraft_code}</td>
            <FlightsModalDetail show={show}
                                 onHide={() => setShow(false)} 
                                 flight_no={flight_no}

                                 />			
            </tr>

  	)
}
export default FlightsTableRow