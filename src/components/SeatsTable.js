import {useContext} from "react"
import FlightDataContext from "./flightDataContext"
import SeatsTableRow from "./SeatsTableRow"


--     aircraft_code character(3) NOT NULL,
--     seat_no character varying(4) NOT NULL,
--     fare_conditions character varying(10) NOT NULL,





function SeatsTable(){

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

						<SeatsTableRow aircraft_code={aircraft_code} seat_no={seat_no} fare_conditions />
			}
			<tbody>
			</table>

		)

}

export default SeatsTable