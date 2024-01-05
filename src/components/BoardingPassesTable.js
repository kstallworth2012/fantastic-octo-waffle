import {useContext} from "react"
import FlightDataContext from "../flightDataContext"
import BoardingPassesTableRow from './BoardingPassesTableRow'
import Table from 'react-bootstrap/Table';



   	// ticket_no ,
    // flight_id ,
    // boarding_no ,
    // seat_no 

function BoardingPassesTable(){
	const {boardingPasses} = useContext(FlightDataContext)

	return(
		<Table striped>
			<thead>
			<tr>
			<th>Ticket Number</th>			
			<th>Flight ID</th>
			<th>boarding_no</th>
			<th>seat_no</th>
			</tr>
			</thead>
			<tbody>
			{
 				boardingPasses.map((b)=>{
							return(
				<BoardingPassesTableRow   	ticket_no = {b.ticket_no}
										    flight_id = {b.flight_id}
										    boarding_no = {b.boarding_no}
										    seat_no ={b.seat_no}
										    key= {b.ticket_no}
										     />)
						})
			}
			</tbody>
			</Table>
			)
}

export default BoardingPassesTable