import { Link, NavLink } from "react-router-dom";


function Navbar(){


	return (


			<nav>
			<Link to="/">Home</Link>
			<Link to="/bookings">Bookings</Link>
			<Link to="/aircrafts">Aircraft</Link>
			<Link to="/flights">Flights</Link>
			<Link to="/airports">Airports</Link>
			<Link to="/boardingpasses">Boarding Passes</Link>
			<Link to="/ticket-flights">Flights</Link>
			<Link to="/tickets">Tickets</Link>
			<Link to="/seats">Seats</Link>
			</nav>
		)
}

export default Navbar