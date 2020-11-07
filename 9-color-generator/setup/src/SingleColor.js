import React, {useState, useEffect} from 'react';

const SingleColor = ({rgb, weight, index, hex}) => {
    const [alert, setAlert] = useState(false);
    const bgc = rgb.join(',');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false);
        }, 3000);
        return () => {
            clearTimeout(timeout);
        };
    }, [alert]);

    return (
        <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor: `rgb(${bgc})`}} onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hex);
        }}>
            <p className={"percent-value"}>{weight}%</p>
            <p className={"color-value"}>#{hex}</p>
            {alert && <p className={"alert"}>Copied to Clipboard</p>}
        </article>
    )
}

export default SingleColor
