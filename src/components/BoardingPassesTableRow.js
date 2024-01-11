import {useState} from "react"
import Button from 'react-bootstrap/Button'
import BoardingPassesModalDetail from './BoardingPassesModalDetail'


function BoardingPassesTableRow({ticket_no,flight_id,boarding_no,seat_no}){
     // For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 

	 return(

  			<tr>

            <td><Button variant="success" onClick={handleShow}>{ticket_no}</Button></td>
            <td>{flight_id}</td>
            <td>{boarding_no}</td>
            <td>{seat_no}</td>	
            <BoardingPassesModalDetail show={show} onHide={()=>setShow(false)} ticket_no={ticket_no} 
                              flight_id={flight_id}
                              boarding_no={boarding_no}
                              seat_no={seat_no}
            />		
            </tr>

  	)
}

export default BoardingPassesTableRow