function TicketsTableRow({ticket_no,book_ref,passenger_id,passenger_name,contact_data}){
	 return(

  			<tr>

            <td>{ticket_no}</td>
            <td>{book_ref}</td>
            <td>{passenger_id}</td>
            <td>{passenger_name}</td>
            <td>{contact_data}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>
            <td>{}</td>  				
            <td>{}</td>  			
            </tr>

  	)
}
export default TicketsTableRow