function AircraftsTableRow({aircraft_code,model,range}){

			 return(

  			<tr>

            <td>{aircraft_code}</td>
            <td>{model}</td>
            <td>{range}</td>
            </tr>

  	)

}

export default AircraftsTableRow