import {useState} from "react"
import Button from 'react-bootstrap/Button'
import BookingViewsModalDetail from './BookingViewsModalDetail'

// {
//             book_ref,
//             ticket_no,
//             passenger_id,
//             passenger_name,
//             fare_conditions,
//             amount,
//             scheduled_departure_local,
//             scheduled_arrival_local,
//             departure,
//             arrival,
//             status,
//             seat_no
//         },


function BookingViewsTableRow({book_ref,
            ticket_no,
            passenger_id,
            passenger_name,
            fare_conditions,
            amount,
            scheduled_departure_local,
            scheduled_arrival_local,
            departure,
            arrival,
            status,
            seat_no}){



  // For the popup modal
 const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


        return(
              <tr>
              <td><Button variant="success" onClick={handleShow}>{book_ref}</Button></td>
              <td>{ticket_no}</td>
              <td>{passenger_id}</td>
              <td>{passenger_name}</td>
              <td>{fare_conditions}</td>
              <td>{amount}</td>
              <td>{scheduled_departure_local}</td>
              <td>{scheduled_arrival_local}</td>
              <td>{departure}</td>
              <td>{arrival}</td>
              <td>{status}</td>
              <td>{seat_no}</td>
              <BookingViewsModalDetail show={show} onHide={() => setShow(false)}
                book_ref={book_ref}
              />

              </tr>

            )

}
export default BookingViewsTableRow