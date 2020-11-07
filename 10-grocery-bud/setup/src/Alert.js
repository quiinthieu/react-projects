import React, {useEffect} from 'react'

const Alert = ({type, msg, setAlert, list}) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert({show: false, msg: '', type: ''});
        }, 3000);
        return () => {
            clearTimeout(timeout);
        }
    }, [list]);

    return (
        <p className={`alert alert-${type === 'success' ? 'success' : 'danger'}`}>{msg}</p>
    )
}

export default Alert
