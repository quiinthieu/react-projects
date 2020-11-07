import React from 'react';
import Tour from './Tour';

const Tours = props => {
	const {tours, removeTour} = props;
	return (
		<section>
			<div className={"title"}>
				<h2>Our Tours</h2>
				<div className={"underline"}></div>
			</div>
			<div>
				{tours.map(tour => <Tour  key={tour.id} tour={tour} removeTour={removeTour}/>)}
			</div>
		</section>


	);
};

export default Tours;
