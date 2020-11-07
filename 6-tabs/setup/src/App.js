import React, {useState, useEffect} from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [jobs, setJobs] = useState([]);
    const [index, setIndex] = useState(0);

    const fetchJobs = async () => {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const jobs = await response.json();
                setJobs(jobs);
                setIsLoading(false);
            } else {
                throw new Error();
            }
        } catch (e) {
            setIsLoading(false);
            setIsError(true);
        }
    }

    useEffect(() => {
        fetchJobs();
    }, []);

    if (isLoading) {
        return (
            <section>
                <h1>Loading...</h1>
            </section>
        )
    }
    if (isError) {
        return (
            <section>
                <h1>Error...</h1>
            </section>
        )
    }

    const {company, dates, duties, title} = jobs[index];
    return (
        <section className={"section"}>
            <div className={"title"}>
                <h2>Experience</h2>
                <div className={"underline"}></div>
            </div>
            <div className={"jobs-center"}>
                <div className={"btn-container"}>
                    {jobs.map((job, i) => {
                        return (
                            <button key={i} type={"button"} className={`job-btn ${i === index ? "active" : ""}`} onClick={() => {
                                setIndex(i);
                            }}>
                                {job.company}
                            </button>
                        );
                    })}
                </div>
                <article className={"job-info"}>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className={"job-date"}>{dates}</p>
                    {duties.map((duty, index) => {
                        return (
                            <div key={index} className={"job-desc"}>
                                <FaAngleDoubleRight className={"job-icon"} />
                                <p>{duty}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
        </section>
    );
}

export default App
