import {useState} from "react"
import Button from 'react-bootstrap/Button'
import AirportsModalDetail from './AirportsModalDetail'



function AirportsTableRow({airport_code ,airport_name,city, coordinates, timezone }){

     // For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  


    return(

  			<tr>

            <td><Button variant="success" onClick={handleShow}>{airport_code}</Button></td>
            <td>{airport_name}</td>
            <td>{city}</td>
            <td>{timezone}</td>	

            <AirportsModalDetail 
                show={show}
                onHide={() => setShow(false)}
                airport_name={airport_name}
                airport_code={airport_code}
                city={city} 
                timezone={timezone}
            />		
            </tr>

  	)



}
export default AirportsTableRow