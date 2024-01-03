
					// <td>{scheduled_duration_hours}</td>
					// <td>{scheduled_duration_minutes}</td>
								// actual_arrival
								// actual_arrival_local
								// actual_departure
								// actual_departure_local
								// actual_duration
								// aircraft_code
								// arrival_airport
								// arrival_airport_name
								// arrival_city
								// departure_airport
								// departure_airport_name
								// departure_city
								// flight_id
								// flight_no
								// scheduled_arrival
								// scheduled_arrival_local
								// scheduled_departure
								// scheduled_departure_local
								// scheduled_duration_hours
								// scheduled_duration_minutes

function FlightViewTableRow({actual_arrival,
								actual_arrival_local,
								actual_departure,
								actual_departure_local,
								actual_duration,
								aircraft_code,
								arrival_airport,
								arrival_airport_name,
								arrival_city,
								departure_airport,
								departure_airport_name,
								departure_city,
								flight_id,
								flight_no,
								status,
								scheduled_arrival,
								scheduled_arrival_local,
								scheduled_departure,
								scheduled_departure_local
								// scheduled_duration
								// scheduled_duration_hours,
								// scheduled_duration_minutes
							}){


			return(
					<tr>
					<td>{actual_arrival}</td>
					<td>{actual_arrival_local}</td>
					<td>{actual_departure}</td>
					<td>{actual_departure_local}</td>
					<td>{actual_duration}</td>
					<td>{aircraft_code}</td>
					<td>{arrival_airport}</td>
					<td>{arrival_airport_name}</td>
					<td>{arrival_city}</td>
					<td>{departure_airport}</td>
					<td>{departure_airport_name}</td>
					<td>{departure_city}</td>
					<td>{flight_id}</td>
					<td>{flight_no}</td>
					<td>{scheduled_arrival}</td>
					<td>{scheduled_arrival_local}</td>
					<td>{scheduled_departure}</td>
					<td>{scheduled_departure_local}</td>
					<td>{status}</td>
					</tr>
					)
}



export default FlightViewTableRow