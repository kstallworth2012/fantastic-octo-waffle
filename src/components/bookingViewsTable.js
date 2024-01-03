import {useContext} from "react"
import FlightDataContext from "../flightDataContext"
import BookingViewsTableRow from './bookingViewsTableRow'



// {
//             "book_ref": "06B046",
//             "ticket_no": "0005432000987",
//             "passenger_id": "8149 604011",
//             "passenger_name": "VALERIY TIKHONOV",
//             "fare_conditions": "Economy",
//             "amount": "6200.00",
//             "scheduled_departure_local": "2017-07-16T16:05:00.000Z",
//             "scheduled_arrival_local": "2017-07-16T16:55:00.000Z",
//             "departure": "Cheboksary (CSY)",
//             "arrival": "Moscow (SVO)",
//             "status": "Arrived",
//             "seat_no": "7A"
//         },


function BookingViewsTable(){
    const {bookingViews} = useContext(FlightDataContext)


    return(

                <table>
                    <thead>
                    <tr>
                    <th>book_ref</th>
                    <th>ticket_no</th>
                    <th>passenger_id</th>
                    <th>passenger_name</th>
                    <th>fare_conditions</th>
                    <th>amount</th>
                    <th>scheduled_departure_local</th>
                    <th>scheduled_arrival_local</th>
                    <th>departure</th>
                    <th>arrival</th>
                    <th>status</th>
                    <th>seat_no</th>

                    </tr>
                    </thead>
                    <tbody>{

                             bookingViews.map((b)=>{
                                return(
                                   <BookingViewsTableRow   

                                        book_ref={b.book_ref}
                                        ticket_no={b.ticket_no}
                                        passenger_id ={b.passenger_id}
                                        passenger_name={b.passenger_name}
                                        fare_conditions={b.fare_conditions}
                                        amount ={b.amount}
                                        scheduled_departure_local={b.scheduled_departure_local}
                                        scheduled_arrival_local={b.scheduled_arrival_local}
                                        departure={b.departure}
                                        arrival={b.arrival}
                                        status={b.status}
                                        seat_no={b.seat_no}
                                        key={b.book_ref}

                                   />
                                )
                            })

                    }</tbody>
                </table>

        )
}


export default BookingViewsTable