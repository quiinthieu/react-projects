import React, {useState, useEffect} from 'react';
import {FiChevronRight, FiChevronLeft} from 'react-icons/fi';
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';
import data from './data';

function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex(index === people.length - 1 ? 0 : index + 1);
        }, 3000);
        return () => {
            clearInterval(slider);
        }
    }, [index]);

    return (
        <section className={"section"}>
            <div className={"title"}>
                <h2>
                    <span>/</span>Reviews
                </h2>
            </div>
            <div className={"section-center"}>
                {people.map((person, i) => {
                    const {id, image, name, title, quote} = person;
                    return (
                        <article key={i} className={`article ${i === index ? "activeSlide" : ""} ${i === index - 1 || index === 0 && i === people.length - 1 ? "lastSlide" : ""} ${i === index + 1 || index === people.length - 1 && i === 0 ? "nextSlide" : ""}`}>
                            <img src={image} alt={name} className={"person-img"}/>
                            <h4>{name}</h4>
                            <p className={"title"}>{title}</p>
                            <p className={"text"}>{quote}</p>
                            <FaQuoteRight className={"icon"}/>
                        </article>
                    );
                })}
                <button className={"prev"} onClick={() => {
                    setIndex(index === 0 ? people.length - 1 : index - 1);
                }}>
                    <FaChevronLeft />
                </button>
                <button className={"next"} onClick={() => {
                    setIndex(index === people.length - 1 ? 0 : index + 1);
                }}>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
}

export default App;
