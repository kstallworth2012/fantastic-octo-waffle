import {useState} from "react"
import Button from 'react-bootstrap/Button'

function TicketsTableRow({ticket_no,book_ref,passenger_id,passenger_name}){
     // For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


	 return(

  			<tr>

            <td><Button variant="success">{ticket_no}</Button></td>
            <td>{book_ref}</td>
            <td>{passenger_id}</td>
            <td>{passenger_name}</td>			
            </tr>

  	)
}
export default TicketsTableRow