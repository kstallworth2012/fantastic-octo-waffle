
import {useContext} from "react"
import FlightDataContext from "./flightDataContext"
import AircraftsTableRow from "./AircraftsTableRow"

function AircraftsTable() {
	// body...
				
  return(
			<table>
			<thead>
			<tr>
			<th>Aircraft Code</th>			
			<th>Model</th>
			<th>Range</th>
			<th></th>
			<th></th>
			<th></th>
			</tr>
			</thead>
			<tbody>
			{

		.map((a)=>{
		return(<AircraftsTableRow aircraft_code={a.aircraft_code} model={a.model} range={a.range} />)
				})
			}
			<tbody>
			</table>
			)
}

export default AircraftsTable