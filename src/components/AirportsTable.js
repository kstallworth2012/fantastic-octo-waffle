
import {useContext} from "react"
import FlightDataContext from "../flightDataContext"
import AirportsTableRow from "./AirportsTableRow"


// airports.map((a)=>{

// 							return(
// 				<AirportsTableRow airport_code={a.airport_code} 

								 
// 								 />)
// 							})
function AirportsTable(){
		         const {airports} = useContext(FlightDataContext)				

	return(

			 // airport_code ,airport_name NULL,city, coordinates, timezone 
    
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

				
			}
			</tbody>
			</table>
			)
}


export default AirportsTable