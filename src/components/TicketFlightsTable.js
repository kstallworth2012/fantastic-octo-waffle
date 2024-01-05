import {useContext} from "react"
import FlightDataContext from "../flightDataContext"
import TicketFlightsTableRow from "./TicketFlightsTableRow"
import Table from 'react-bootstrap/Table';




// --     ticket_no character(13) NOT NULL,
// --     flight_id integer NOT NULL,
// --     fare_conditions character varying(10) NOT NULL,
// --     amount numeric(10,2) NOT NULL,
function TicketFlightsTable(){
     const {ticketFlights} = useContext(FlightDataContext)
	return(
				<Table striped>
			<thead>
			<tr>
			<th>ticket_no</th>			
			<th>flight_id</th>
			<th>fare_conditions</th>
			<th>amount</th>
			<th></th>
			<th></th>
			</tr>
			</thead>
			<tbody>
			{
					ticketFlights.map((t)=>{
							return(
				<TicketFlightsTableRow ticket_no={t.ticket_no} flight_id={t.flight_id} 
											fare_conditions={t.fare_conditions} 
											amount={t.amount} 
											key={t.ticket_no}
											/>)
						})
			}
			</tbody>
			</Table>
			)
}

export default TicketFlightsTable