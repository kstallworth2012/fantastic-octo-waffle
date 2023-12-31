
import {useContext} from "react"
import FlightDataContext from "../flightDataContext"
import AirportsTableRow from "./AirportsTableRow"
import Table from 'react-bootstrap/Table';


function AirportsTable(){
		         const {airports} = useContext(FlightDataContext)				

	return(

			 // airport_code ,airport_name NULL,city, coordinates, timezone 
    
			<Table striped>
			<thead>
			<tr>
			<th>Airport Code</th>			
			<th>Airport Name</th>
			<th>City</th>
			<th>Timezone</th>
			
			</tr>
			</thead>
			<tbody>
			{ 
									airports.map((a)=>{

							return(
				<AirportsTableRow airport_code={a.airport_code} 
								  airport_name={a.airport_name.en}
								  city={a.city.en}
								  timezone={a.timezone}

								 
								 />)
							})
				
			}
			</tbody>
			</Table>
			)
}


export default AirportsTable