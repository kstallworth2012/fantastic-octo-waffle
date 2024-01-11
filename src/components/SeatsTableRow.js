// SeatsTableRow.js
import {useState} from "react"
import Button from 'react-bootstrap/Button';

import SeatsModalDetail from './SeatsModalDetail'



function SeatsTableRow({aircraft_code,seat_no,fare_conditions}){
       // For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(

  			<tr>

            <td>{aircraft_code}</td>
            <td><Button variant="primary" onClick={handleShow}>{seat_no}</Button></td>
            <td>{fare_conditions}</td>
     			 <SeatsModalDetail show={show} onHide={()=> setShow(false)} 
                                                          aircraft_code={aircraft_code} 
                                                          seat_no={seat_no}
                                                          fare_conditions={fare_conditions}/>
            </tr>

  	)
}

export default SeatsTableRow