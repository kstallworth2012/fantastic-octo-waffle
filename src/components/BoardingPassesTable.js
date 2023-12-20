import {useContext} from "react"
import FlightDataContext from "./flightDataContext"
import BoardingPassesTableRow from './BoardingPassesTableRow'



   	ticket_no ,
    flight_id ,
    boarding_no ,
    seat_no 

function BoardingPassesTable(){

	return(
				<table>
			<thead>
			<tr>
			<th>Ticket Number</th>			
			<th>Flight ID</th>
			<th>boarding_no</th>
			<th>seat_no</th>
			<th></th>
			<th></th>
			</tr>
			</thead>
			<tbody>
			{

				<BoardingPassesTableRow   	ticket_no = {a.ticket_no}
										    flight_id = {a.flight_id}
										    boarding_no = {a.boarding_no}
										    seat_no ={a.seat_no} />
			}
			<tbody>
			</table>
			)
}

export default BoardingPassesTable