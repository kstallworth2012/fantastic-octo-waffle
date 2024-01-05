import {useContext} from "react"
import FlightDataContext from "../flightDataContext"
import FlightViewTableRow from './FlightViewTableRow'
// scheduled_duration={f.scheduled_duration.hours,f.scheduled_duration.minutes}
				// <th>scheduled_duration_hours</th>
				// <th>scheduled_duration_minutes</th>




// flightViews.map((f)=>{

// 							return(
// 				<FlightViewTableRow 
// 								actual_arrival={f.actual_arrival}
// 								actual_arrival_local={f.actual_arrival_local}
// 								actual_departure={f.actual_departure}
// 								actual_departure_local={f.actual_departure_local}
// 								actual_duration={f.actual_duration}
// 								aircraft_code={f.aircraft_code}
// 								arrival_airport={f.arrival_airport}
// 								arrival_airport_name={f.arrival_airport_name}
// 								arrival_city={f.arrival_city}
// 								departure_airport={f.departure_airport}
// 								departure_airport_name={f.departure_airport_name}
// 								departure_city={f.departure_city}
// 								flight_id={f.flight_id}
// 								flight_no={f.flight_no}
// 								scheduled_arrival={f.scheduled_arrival}
// 								scheduled_arrival_local={f.scheduled_arrival_local}
// 								scheduled_departure={f.scheduled_departure}
// 								scheduled_departure_local={f.scheduled_departure_local}
							    
// 										/>)
// 					})


import Table from 'react-bootstrap/Table';


function FlightViewTable(){
	const {flightViews} = useContext(FlightDataContext)

		return(

		  <div>
		  	<Table striped="columns">
		  	<thead>
			<tr>
				<th>actual_arrival</th>
				<th>actual_arrival_local</th>
				<th>actual_departure</th>
				<th>actual_departure_local</th>
				<th>actual_duration</th>
				<th>aircraft_code</th>
				<th>arrival_airport</th>
				<th>arrival_airport_name</th>
				<th>arrival_city</th>
				<th>departure_airport</th>
				<th>departure_airport_name</th>
				<th>departure_city</th>
				<th>flight_id</th>
				<th>flight_no</th>
				<th>scheduled_arrival</th>
				<th>scheduled_arrival_local</th>
				<th>scheduled_departure</th>
				<th>scheduled_departure_local</th>
				<th>scheduled_duration</th>
				<th>status</th>


			</tr>
			</thead>
			<tbody>
			{
				flightViews.map((f)=>{

							return(
				<FlightViewTableRow 
								actual_arrival={f.actual_arrival}
								actual_arrival_local={f.actual_arrival_local}
								actual_departure={f.actual_departure}
								actual_departure_local={f.actual_departure_local}
								aircraft_code={f.aircraft_code}
								arrival_airport={f.arrival_airport}
								arrival_airport_name={f.arrival_airport_name}
								arrival_city={f.arrival_city}
								departure_airport={f.departure_airport}
								departure_airport_name={f.departure_airport_name}
								departure_city={f.departure_city}
								flight_id={f.flight_id}
								flight_no={f.flight_no}
								scheduled_arrival={f.scheduled_arrival}
								scheduled_arrival_local={f.scheduled_arrival_local}
								scheduled_departure={f.scheduled_departure}
								scheduled_departure_local={f.scheduled_departure_local}
								status={f.status}
								key={f.flight_id}
								// scheduled_duration={f.scheduled_duration.minutes}

							
										/>)
					})
				
			}
			</tbody>
		  	</Table>
		  </div>
		  )
			
}


export default FlightViewTable