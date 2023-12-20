
import {useContext} from "react"
import FlightDataContext from "./flightDataContext"
import AirportsTableRow from "./AirportsTableRow"

function AirportsTable(){

	return(

			 airport_code ,airport_name NULL,city, coordinates, timezone 

			<table>
			<thead>
			<tr>
			<th>Airport Code</th>			
			<th>Airport Name</th>
			<th>City</th>
			<th>Coordinates</th>
			<th>Timezone</th>
			
			</tr>
			</thead>
			<tbody>
			{
				<AirportsTableRow airport_code={a.airport_code} 
								airport_name={a.airport_name} 
								city={a.city} 
								coordinates={a.coordinates} 
								timezone={a.timezone} />
			}
			<tbody>
			</table>
			)
}


export default AirportsTable