import {useState} from "react"
import Button from 'react-bootstrap/Button'
import FlightViewModalDetail from './FlightViewModalDetail'




					// <td>{scheduled_duration_hours}</td>
					// <td>{scheduled_duration_minutes}</td>
								// actual_arrival
								// actual_arrival_local
								// actual_departure
								// actual_departure_local
								// actual_duration
								// aircraft_code
								// arrival_airport
								// arrival_airport_name
								// arrival_city
								// departure_airport
								// departure_airport_name
								// departure_city
								// flight_id
								// flight_no
								// scheduled_arrival
								// scheduled_arrival_local
								// scheduled_departure
								// scheduled_departure_local
								// scheduled_duration_hours
								// scheduled_duration_minutes

function FlightViewTableRow({actual_arrival,
								actual_arrival_local,
								actual_departure,
								actual_departure_local,
								actual_duration,
								aircraft_code,
								arrival_airport,
								arrival_airport_name,
								arrival_city,
								departure_airport,
								departure_airport_name,
								departure_city,
								flight_id,
								flight_no,
								status,
								scheduled_arrival,
								scheduled_arrival_local,
								scheduled_departure,
								scheduled_departure_local
								// scheduled_duration
								// scheduled_duration_hours,
								// scheduled_duration_minutes
							}){



// For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


			return(
					<tr>
					<td>{actual_arrival}</td>
					<td>{actual_arrival_local}</td>
					<td>{actual_departure}</td>
					<td>{actual_departure_local}</td>
					<td>{actual_duration}</td>
					<td>{aircraft_code}</td>
					<td>{arrival_airport}</td>
					<td><Button variant="success" onClick={handleShow}>{arrival_airport_name}</Button></td>
					<td>{arrival_city}</td>
					<td>{departure_airport}</td>
					<td>{departure_airport_name}</td>
					<td>{departure_city}</td>
					<td>{flight_id}</td>
					<td>{flight_no}</td>
					<td>{scheduled_arrival}</td>
					<td>{scheduled_arrival_local}</td>
					<td>{scheduled_departure}</td>
					<td>{scheduled_departure_local}</td>
					<td>{status}</td>
					<FlightViewModalDetail show={show} onHide={()=> setShow(false)}
					actual_arrival={actual_arrival}
								actual_arrival_local={actual_arrival_local}
								actual_departure={actual_departure}
								actual_departure_local={actual_departure_local}
								actual_duration={actual_duration}
								aircraft_code={aircraft_code}
								arrival_airport={arrival_airport}
					arrival_airport_name={arrival_airport_name} 

								arrival_city={arrival_city}
								departure_airport={departure_airport}
								departure_airport_name={departure_airport_name}
								departure_city={departure_city}
								flight_id={flight_id}
								flight_no={flight_no}
								status={status}
								scheduled_arrival={scheduled_arrival}
								scheduled_arrival_local={scheduled_arrival_local}
								scheduled_departure={scheduled_departure}
								scheduled_departure_local={scheduled_arrival_local}
					/>
					</tr>
					)
}



export default FlightViewTableRow