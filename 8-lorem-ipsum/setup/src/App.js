import React, {useState} from 'react';
import data from './data';

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState([]);

    const handleSubmit = e => {
        e.preventDefault();
        setText(data.slice(0, count <= 0 ? 1 : count > 8 ? 8 : count));
    }

    return (
        <section className={"section-center"}>
            <h3>Tired of Boring Lorem Ipsum?</h3>
            <form className={"lorem-form"} onSubmit={e => handleSubmit(e)}>
                <label htmlFor={"amount"}>Paragraph(s):</label>
                <input type={"number"} name={"amount"} id={"amount"} onChange={e => setCount(parseInt(e.target.value))}/>
                <button type={"submit"} className={"btn"}>Generate</button>
            </form>
            <article className={"lorem-text"}>
                {text.map((paragraph, index) => {
                    return (
                        <p key={index}>{paragraph}</p>
                    )
                })}
            </article>
        </section>
    )
}

export default App;
