import React, { useState } from 'react';

const Tour = props => {
	const {id, image, info, price, name} = props.tour;
	const [readMore, setReadMore] = useState(false);
    return (
    	<article className="single-tour">
		    <img src={image} alt={""} />
		    <footer>
			    <div className={"tour-info"}>
				    <h4>{name}</h4>
				    <h4 className={"tour-price"}>{price}</h4>
			    </div>
			    <p>
				    {readMore ? info : `${info.substring(0, 100)}... `}
			    </p>
			    <button onClick={() => setReadMore(!readMore)}>
				    {readMore ? 'Show Less' : 'Read More'}
			    </button>
			    <button className="delete-btn" type={"button"} onClick={() => props.removeTour(id)}>Not Interested</button>
		    </footer>
	    </article>
    );
};

export default Tour;
