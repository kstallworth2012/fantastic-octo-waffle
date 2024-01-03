function TicketsTableRow({ticket_no,book_ref,passenger_id,passenger_name}){
	 return(

  			<tr>

            <td>{ticket_no}</td>
            <td>{book_ref}</td>
            <td>{passenger_id}</td>
            <td>{passenger_name}</td>			
            </tr>

  	)
}
export default TicketsTableRow