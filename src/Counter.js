import {useState} from 'react'

let counter = 0;


function Counter() {

	let [getCounter, updateCounter] = useState(0);
	function handleChange() {
		
		updateCounter(getCounter++);	
	}
	
	return (
		<div>

			<h1>Counter is: {getCounter}</h1>
			<button onClick={handleChange}>Update Counter</button>
		</div>
	)
}

export default Counter;