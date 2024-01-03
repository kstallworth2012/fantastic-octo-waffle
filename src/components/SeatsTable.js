import {useContext} from "react"
import FlightDataContext from "../flightDataContext"
import SeatsTableRow from "./SeatsTableRow"


// --     aircraft_code character(3) NOT NULL,
// --     seat_no character varying(4) NOT NULL,
// --     fare_conditions character varying(10) NOT NULL,





function SeatsTable(){
	const {seats} = useContext(FlightDataContext)

	return(

			<table>
			<thead>
			<tr>
			<th>aircraft_code</th>			
			<th>seat_no</th>
			<th>fare_conditions</th>
			<th></th>
			<th></th>
			<th></th>
			</tr>
			</thead>
			<tbody>
			{     
						seats.map((s)=>{
							return(
						<SeatsTableRow aircraft_code={s.aircraft_code} 
										seat_no={s.seat_no} 
										fare_conditions = {s.fare_conditions} 
										key={s.aircraft_code}
										/>)
							})


			}
			</tbody>
			</table>

		)

}

export default SeatsTable