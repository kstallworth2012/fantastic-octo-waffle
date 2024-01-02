function FlightsTableRow({flight_id,flight_no,
                            scheduled_departure,
                            scheduled_arrival,
                            departure_airport,arrival_airport,status,
                            aircraft_code,actual_departure,actual_arrival
                                }){


	 return(

  			<tr>

            <td>{flight_id}</td>
            <td>{flight_no}</td>
            <td>{scheduled_departure}</td>
            <td>{scheduled_arrival}</td>
            <td>{departure_airport}</td>
            <td>{arrival_airport}</td>
            <td>{status}</td>
            <td>{aircraft_code}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>  				
            <td>{}</td>  			
            </tr>

  	)
}
export default FlightsTableRow