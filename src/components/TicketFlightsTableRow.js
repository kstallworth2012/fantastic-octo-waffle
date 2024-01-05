import {useState} from "react"
import Button from 'react-bootstrap/Button'

function TicketFlightsTableRow({ticket_no,flight_id,fare_conditions,amount}){
     // For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 
	 return(

  			<tr>

            <td><Button variant="success">{ticket_no}</Button></td>
            <td>{flight_id}</td>
            <td>{fare_conditions}</td>
            <td>{amount}</td>
            <td>{}</td>
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
export default TicketFlightsTableRow