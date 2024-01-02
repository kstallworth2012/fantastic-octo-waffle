import {useState,useEffect,useContext} from "react"
import logo from './logo.svg';
import './App.css';
import FlighDataAPI from './api'
import FlightDataContext from './flightDataContext'
import BookingsTable from './components/BookingsTable'
import Navbar from "./Navbar"
import Routes from "./Routes"

function App() {

  const [bookings,setBookings] = useState([])
  const [tickets,setTickets] = useState([])
  const [boardingPasses,setBoardingPasses] = useState([])
  const [ticketFlights,setTicketFlights] = useState([])
  const [airports,setAirports] = useState([])
  const [aircrafts,setAircrafts] = useState([])
  const [seats,setAllSeats] = useState([])
  const [flights,setFlights]=useState([])


  useEffect(()=>{
      async function getBookings(){
          try{
                  const result1 = await FlighDataAPI.getAllBookings()
                  setBookings(result1.data)




                  const result2 = await FlighDataAPI.getAllTickets()
                  setTickets(result2.data)
                  console.log("=======================================")
                  console.log(tickets)
                  
                  const result3 = await FlighDataAPI.getAllBoadingPasses()
                  setBoardingPasses(result3.data)
                  console.log(boardingPasses)
                  
                  // const result4 = await FlighDataAPI.getAllTicketFlights()
                  // setTicketFlights(result4.data.TicketFlights)
                  // // console.log(ticketFlights)

                  // const result5 = await FlighDataAPI.getAllAirports()
                  // setAirports(result5)
                  // console.log(airports)

                  const result6 = await FlighDataAPI.getAllFlights()
                  setFlights(result6.data)
                  // console.log(flights)

                  // const result7 = await FlighDataAPI.getAllAircrafts()
                  // setAircrafts(result7.data)
                  // console.log(aircrafts)
                  const result8 = await FlighDataAPI.getAllSeats()
                  setAllSeats(result8.data)
                  // console.log(seats)
                  // let limit5 = result8.filter((a)=>{
                  //      return a < 5 
                  // })

                  // console.log(limit5)

                  // let only319 = seats.filter((s)=>{
                  //     return s.aircraft_code === '319' && s.fare_conditions === 'Business'
                  // })

                  // console.log(only319)





                  // console.log(result.data.Bookings)
          }catch(error){
            return console.log(error)
          }
      }
      getBookings()
  },[])
  return (
    <FlightDataContext.Provider value={{bookings,tickets,ticketFlights,flights,boardingPasses,seats,aircrafts,airports}}>
    <div className="App">
    <Navbar />
    <Routes />
    </div>
    </FlightDataContext.Provider>
  );
}

export default App;
