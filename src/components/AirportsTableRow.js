import {useState} from "react"
import Button from 'react-bootstrap/Button'

function AirportsTableRow({airport_code ,airport_name,city, coordinates, timezone }){

     // For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


    return(

  			<tr>

            <td><Button variant="success">{airport_code}</Button></td>
            <td>{airport_name}</td>
            <td>{city}</td>
            <td>{timezone}</td>			
            </tr>

  	)



}
export default AirportsTableRow