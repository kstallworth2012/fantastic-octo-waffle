function AirportsTableRow({airport_code ,airport_name,city, coordinates, timezone }){
    return(

  			<tr>

            <td>{airport_code}</td>
            <td>{airport_name}</td>
            <td>{city}</td>
            <td>{timezone}</td>			
            </tr>

  	)



}
export default AirportsTableRow