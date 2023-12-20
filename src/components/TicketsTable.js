import {useContext} from "react"
import FlightDataContext from "./flightDataContext"
import TicketsTableRow from "./TicketsTableRow"


 ticket_no character(13) NOT NULL,
--     flight_id integer NOT NULL,
--     fare_conditions character varying(10) NOT NULL

function TicketsTable(){

	return(
				<table>
			<thead>
			<tr>
			<th>ticket_no</th>			
			<th>flight_id</th>
			<th>fare_conditions</th>
			<th></th>
			<th></th>
			<th></th>
			</tr>
			</thead>
			<tbody>
			{

				<TicketsTableRow ticket_no={ticket_no} flight_id={flight_id} fare_conditions={fare_conditions}
			}
			<tbody>
			</table>
			)
}

export default TicketsTable