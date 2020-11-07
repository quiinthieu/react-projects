import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTour = id => {
		setTours(tours.filter(tour => tour.id !== id));
	}

	const fetchTours =  async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			setIsLoading(false);
			setTours(tours);
		} catch (e) {
			console.log(e.message);
		}

	}

	useEffect(() => {
		fetchTours();
	}, []);

    return (
    	<main>
		    {isLoading ? <Loading /> : tours.length === 0 ? (
		    	<div className={"title"}>
		    	    <h2>No Tours Left</h2>
		    	    <button type={"button"} className={"btn"} onClick={fetchTours}>Refresh</button>
		    	</div>) : <Tours tours={tours} removeTour={removeTour}/>}
	    </main>
    );
}

export default App
