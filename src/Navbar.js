import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
import { Link, NavLink } from "react-router-dom";


function NavBar(){


	return (

     	<Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
		<Container>
			
			<Navbar.Brand href="/">Flight Data</Navbar.Brand>
			<Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
			<Nav.Link><NavLink to="/bookings">Bookings</NavLink></Nav.Link>
			<Nav.Link><NavLink to="/aircrafts">Aircraft</NavLink></Nav.Link>
			<Nav.Link><NavLink to="/flights">Flights</NavLink></Nav.Link>
			<Nav.Link><NavLink to="/airports">Airports</NavLink></Nav.Link>
			<Nav.Link><NavLink to="/boardingpasses">Boarding Passes</NavLink></Nav.Link>
			<Nav.Link><NavLink to="/ticket-flights">Flights</NavLink></Nav.Link>
			<Nav.Link><NavLink to="/tickets">Tickets</NavLink></Nav.Link>
			<Nav.Link><NavLink to="/seats">Seats</NavLink></Nav.Link>
			<Nav.Link><NavLink to= "/flight-views">Flight Views</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/booking-views">Booking Views</NavLink></Nav.Link>
			
		</Container>
		</Navbar>
		)
}

export default NavBar