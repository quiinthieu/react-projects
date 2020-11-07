import React, {useState} from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values('#f15025').all(10));

    const handleSubmit = e => {
        e.preventDefault();
        try {
            setList(new Values(color).all(10));
        } catch (e) {
            setError(true);
        }
    }

    return (
        <React.Fragment>
            <section className={"container"}>
                <h3>Color Generator</h3>
                <form onSubmit={e => handleSubmit(e)}>
                    <input className={`${error ? "error" : ""}`} type={"text"} value={color} name={"color"} onChange={e => setColor(e.target.value)}  placeholder={"#000"}/>
                    <button className={"btn"} type={"submit"}>Submit</button>
                </form>
            </section>
            <section className={"colors"}>
                {list.map((color, index) => {
                    return <SingleColor key={index} index={index} {...color} hex={color.hexString(color.hex)} />
                })}
            </section>
        </React.Fragment>
    );
}

export default App
