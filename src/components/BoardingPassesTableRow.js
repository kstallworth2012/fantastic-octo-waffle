 import {useState} from "react"
 import Button from 'react-bootstrap/Button'

function BoardingPassesTableRow({ticket_no,flight_id,boarding_no,seat_no}){
     // For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 

	 return(

  			<tr>

            <td><Button variant="success">{ticket_no}</Button></td>
            <td>{flight_id}</td>
            <td>{boarding_no}</td>
            <td>{seat_no}</td>			
            </tr>

  	)
}

export default BoardingPassesTableRow