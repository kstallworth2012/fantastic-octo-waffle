import {useState} from "react"
import Button from 'react-bootstrap/Button'
import BookingsModalDetail from "./BookingsModalDetail"
// book_ref character(6) NOT NULL,
//     book_date timestamp with time zone NOT NULL,
//     total_amount numeric(10,2) NOT NULL




function BookingsTableRow({book_ref,book_date,total_amount}){
	 // For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


     return(

  			<tr>

            <td><Button variant="success" onClick={handleShow}>{book_ref}</Button></td>
            <td>{book_date}</td>
            <td>{total_amount}</td> 
            <BookingsModalDetail show={show} onHide={()=>setShow(false)} book_ref={book_ref} book_date={book_date}
                              total_amount={total_amount}
             />			
            </tr>

  	)
}
export default BookingsTableRow