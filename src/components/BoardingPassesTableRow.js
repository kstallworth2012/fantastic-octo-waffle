function BoardingPassesTableRow({ticket_no,flight_id,boarding_no,seat_no}){


	 return(

  			<tr>

            <td>{ticket_no}</td>
            <td>{flight_id}</td>
            <td>{boarding_no}</td>
            <td>{seat_no}</td>			
            </tr>

  	)
}

export default BoardingPassesTableRow