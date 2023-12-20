// book_ref character(6) NOT NULL,
//     book_date timestamp with time zone NOT NULL,
//     total_amount numeric(10,2) NOT NULL




function BookingsTableRow({book_ref,book_date,total_amount}){
	 return(

  			<tr>

            <td>{book_ref}</td>
            <td>{book_date}</td>
            <td>{total_amount}</td> 			
            </tr>

  	)
}
export default BookingsTableRow