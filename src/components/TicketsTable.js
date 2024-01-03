import {useContext} from "react"
import FlightDataContext from "../flightDataContext"
import TicketsTableRow from "./TicketsTableRow"


 		// "ticket_no": "0005432000987",
        // "book_ref": "06B046",
        // "passenger_id": "8149 604011",
        // "passenger_name": "VALERIY TIKHONOV",
        // "contact_data": {
        //     "phone": "+70127117011"
        // }

function TicketsTable(){
			const {tickets} = useContext(FlightDataContext)
	return(
				<table>
			<thead>
			<tr>
			<th>ticket_no</th>			
			<th>book_ref</th>
			<th>passenger_id</th>
			<th>passenger_name</th>
			</tr>
			</thead>
			<tbody>
			{
					tickets.map((t)=>{
							return(
				<TicketsTableRow ticket_no={t.ticket_no} 
					book_ref={t.book_ref} passenger_id={t.passenger_id} 
					passenger_name={t.passenger_name}
					key={t.ticket_no}
					/>)
				})
			}
			</tbody>
			</table>
			)
}

export default TicketsTable