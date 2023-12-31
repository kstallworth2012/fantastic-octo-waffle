import {useContext} from "react"
import FlightDataContext from "../flightDataContext"
import FlightsTableRow from "./FlightsTableRow"
import Table from 'react-bootstrap/Table';
    // flight_id integer NOT NULL,
    // flight_no character(6) NOT NULL,
    // scheduled_departure timestamp with time zone NOT NULL,
    // scheduled_arrival timestamp with time zone NOT NULL,
    // departure_airport character(3) NOT NULL,
    // arrival_airport character(3) NOT NULL,
    // status character varying(20) NOT NULL,
    // aircraft_code character(3) NOT NULL,
    // actual_departure timestamp with time zone,
    // actual_arrival timestamp with time zone,



    // flight_id={a.flight_id}
    // flight_no={a.flight_no} 
    // scheduled_departure={a.scheduled_departure}
    // scheduled_arrival={a.scheduled_arrival}
    // departure_airport={a.departure_airport}
    // arrival_airport={a.arrival_airport}
    // status={a.status}
    // aircraft_code={a.aircraft_code} 
    // actual_departure={a.actual_departure}
    // actual_arrival={a.actual_arrival} 



function FlightsTable(){

     const {flights} = useContext(FlightDataContext)
	return(
				<Table striped>
			<thead>
			<tr>
			<th>flight_id</th>			
			<th>flight_no</th>
			<th>scheduled_departure</th>
			<th>departure_airport</th>
			<th>arrival_airport</th>
			<th>status</th>
			<th>aircraft_code</th>
			<th>actual_departure</th>
			<th>actual_arrival</th>
			</tr>
			</thead>
			<tbody>
			{
				flights.map((a)=>{
							return(
				<FlightsTableRow  flight_id={a.flight_id}
    								flight_no={a.flight_no} 
    								scheduled_departure={a.scheduled_departure}
    								scheduled_arrival={a.scheduled_arrival}
    								departure_airport={a.departure_airport}
    								arrival_airport={a.arrival_airport}
    								status={a.status}
    								aircraft_code={a.aircraft_code} 
    								actual_departure={a.actual_departure}
    								actual_arrival={a.actual_arrival} 
    								key = {a.flight_id}
    								/>)
    							})
			}
			</tbody>
			</Table>
			)
}

export default FlightsTable