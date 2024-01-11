import {useState} from "react"
import Button from 'react-bootstrap/Button'
import TicketFlightsModalDetail from "./TicketFlightsModalDetail"


function TicketFlightsTableRow({ticket_no,flight_id,fare_conditions,amount}){
     // For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 
	 return(

  			<tr>

            <td><Button variant="success" onClick={handleShow}>{ticket_no}</Button></td>
            <td>{flight_id}</td>
            <td>{fare_conditions}</td>
            <td>{amount}</td>

            <TicketFlightsModalDetail show={show} onHide={()=>setShow(false)}
            ticket_no = {ticket_no} 
            flight_id={flight_id}
            fare_conditions={fare_conditions}
            amount={amount}
            /> 			
            </tr>

  	)
}
export default TicketFlightsTableRow