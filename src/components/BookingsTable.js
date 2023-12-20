
import {useContext} from "react"
import FlightDataContext from "../flightDataContext"
import BookingsTableRow from './BookingsTableRow'

// BookingsTable.js


    // book_ref character(6) NOT NULL,
    // book_date timestamp with time zone NOT NULL,
    // total_amount numeric(10,2) NOT NULL
function BookingsTable(){
   const {bookings} = useContext(FlightDataContext)
   console.log(bookings)
	return(
			<div>
			<table>
			<thead>
			<tr>
			<th>Book Ref</th>			
			<th>Book Date</th>
			<th>total_amount</th>
			</tr>
			</thead>
			<tbody>
				{
					bookings.map((a)=>{
									return(
					<BookingsTableRow book_ref={a.book_ref} 
									  book_date={a.book_date}
									  total_amount={a.total_amount}
					 />

			)
					})
				}
			</tbody>
			</table>
			</div>
			)








}
export default BookingsTable