
import {useContext} from "react"
import FlightDataContext from "../flightDataContext"
import AircraftsTableRow from "./AircraftsTableRow"
import Table from 'react-bootstrap/Table';

function AircraftsTable() {

         const {aircrafts} = useContext(FlightDataContext)				
  return(
			<Table striped>
			<thead>
			<tr>
			<th>Aircraft Code</th>			
			<th>Model</th>
			<th>Range</th>
			</tr>
			</thead>
			<tbody>
			{

		aircrafts.map((a)=>{
		return(<AircraftsTableRow aircraft_code={a.aircraft_code} 
		model={a.model.en} range={a.range} key={a.aircraft_code} />)
				})
			}
			</tbody>
			</Table>
			)
}

export default AircraftsTable