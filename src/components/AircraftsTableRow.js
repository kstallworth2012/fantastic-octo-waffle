import {useState} from "react"
import Button from 'react-bootstrap/Button'
import AircraftsModalDetail from './AircraftsModalDetail'

function AircraftsTableRow({aircraft_code,model,range}){
  // For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
			 return(

  			<tr>

            <td><Button variant="success" onClick={handleShow}>{aircraft_code}</Button></td>
            <td>{model}</td>
            <td>{range}</td>
            <AircraftsModalDetail show={show}
                                 onHide={() => setShow(false)} 
                                    model={model}
                                 />
            </tr>

  	)

}

export default AircraftsTableRow