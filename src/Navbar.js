import { Link, NavLink } from "react-router-dom";


function Navbar(){


	return (


			<nav>
			<Link to="/">Home</Link><br />
			<Link to="/bookings">Bookings</Link><br />
			<Link to="/aircrafts">Aircraft</Link><br />
			<Link to="/flights">Flights</Link><br />
			<Link to="/airports">Airports</Link><br />
			<Link to="/boardingpasses">Boarding Passes</Link><br />
			<Link to="/ticket-flights">Flights</Link><br />
			<Link to="/tickets">Tickets</Link><br />
			<Link to="/seats">Seats</Link><br />
			<Link to= "/flight-views">Flight Views</Link><br />
            <Link to="/booking-views">Booking Views</Link>
			</nav>
		)
}

export default Navbar