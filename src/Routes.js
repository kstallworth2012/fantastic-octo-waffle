import {Switch,Route} from "react-router-dom"
import BookingsTable from './components/BookingsTable'
import AircraftsTable from "./components/AircraftsTable"
import FlightsTable from "./components/FlightsTable"
import AirportsTable from "./components/AirportsTable"
import BoardingPassesTable from "./components/BoardingPassesTable"
import TicketFlightsTable from "./components/TicketFlightsTable"
import TicketsTable from "./components/TicketsTable"
import SeatsTable from "./components/SeatsTable"
import FlightViewTable from "./components/FlightViewTable"
import BookingViewsTable from './components/bookingViewsTable'
function Routes(){
			return(
				<div>
						<Switch>
							<Route exact path ='/bookings'>
								<BookingsTable />
							</Route>

							<Route exact path ='/aircrafts'>
								<AircraftsTable />
							</Route>

							<Route exact path = "/flights">
							<FlightsTable />
							</Route>
							
							<Route exact path = "/airports">
							<AirportsTable />
							</Route>
							

							<Route exact path = "/boardingpasses">
							<BoardingPassesTable />
							</Route>
							
							<Route exact path = "/ticket-flights">
							<TicketFlightsTable />
							</Route>
					
							
							<Route exact path = "/tickets">
							<TicketsTable />
							</Route>

							<Route exact path = "/seats">
							<SeatsTable />
							</Route>
							<Route exact path = "/flight-views">
								<FlightViewTable />
							</Route>
							<Route exact path = "/booking-views">
							  <BookingViewsTable />
							</Route>
						</Switch>
				</div>
			)
}


export default Routes