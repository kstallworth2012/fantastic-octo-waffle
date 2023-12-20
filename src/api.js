import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:7070";
class FlighDataAPI {


// Bookings.js
// Tickets.js
// TicketFlights.js
// BoardingPasses.js
// Airports.js
// Flights.js
// Aircrafts.js
// Seats.js

			static async getBooking(id){
				try{
						const result = await axios.get(`http://localhost:7070/bookings/${id}`)
					   return result.data 
				}catch(error){
					console.log(error)
				}
			}

			static async getAllBookings(){
				try{
					   const results = await axios.get("http://localhost:7070/bookings")
					   return results 
				}catch(error){
					console.log(error)
				}
			}


			// static async getTicket(id){
			// 	try{}catch(error){}
			// }



			static async getAllTickets(){
				try{
					const results = await axios.get("http://localhost:7070/tickets")
					return results
				}catch(error){
					console.log(error)
				}
			}



			// static async getBoardingPass(id){
			// 	try{}catch(error){}
			// }

			static async getAllBoadingPasses(){
				try{
					const results = await axios.get("http://localhost:7070/boardingPasses")
					return results
				}catch(error){}
			}

			// static async getTicketFlight(id){
			// 	try{}catch(error){}
			// }


			static async getAllTicketFlights(){
				try{

					const results = await axios.get("http://localhost:7070/ticketFlights")
					return results
				}catch(error){
					console.log(error)
				}
			}



			// static async Airport(id){
			// 	try{}catch(error){}
			// }



			static async getAllAirports(){
				try{

					const results = await axios.get("http://localhost:7070/airports")
					return results
				}catch(error){
					console.log(error)
				}
			}

           


			// static async getFlight(id){
			// 	try{}catch(error){}
			// }
			
			static async getAllFlights(){
				try{

					const results = await axios.get("http://localhost:7070/flights")
					return results
				}catch(error){
					console.log(error)
				}

			}


			// static async getAircraft(id){
			// 	try{}catch(error){}
			// }


			static async getAllAircrafts(){
			
				try{
					const results = await axios.get("http://localhost:7070/aircrafts")
					return results
				}catch(error){
					console.log(error)
				}
			}


			// static async getSeat(id){
			// 	try{}catch(error){}
			// }

			
			static async getAllSeats(){
				try{
					const results = await axios.get("http://localhost:7070/seats")
					return results
				}catch(error){
					console.log(error)
				}
			}





			// static async (){
			// 	try{}catch(error){}
			// }static async (){
			// 	try{}catch(error){}
			// }static async (){
			// 	try{}catch(error){}
			// }static async (){
			// 	try{}catch(error){}
			// }static async (){
			// 	try{}catch(error){}
			// }static async (){
			// 	try{}catch(error){}
			// }static async (){
			// 	try{}catch(error){}
			// }static async (){
			// 	try{}catch(error){}
			// }static async (){
			// 	try{}catch(error){}
			// }static async (){
			// 	try{}catch(error){}
			// }



}
export default FlighDataAPI