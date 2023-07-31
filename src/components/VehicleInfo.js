function VehicleInfo(props) {
	return(
		<div>
			<h1>Total vehicles are: {props.total_vehicles.length}</h1>
			{props.total_vehicles.map(vehicle => <div>{vehicle}</div>)}

		</div>
	)
}

export default VehicleInfo;