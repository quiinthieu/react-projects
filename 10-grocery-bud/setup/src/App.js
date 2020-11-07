import React, {useEffect, useState} from 'react'
import List from "./List";
import Alert from "./Alert";

function App() {
    const [name, setName] = useState('');
    const [list, setList] = useState(JSON.parse(localStorage.getItem('list')) || []);
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({show: false, msg: '', type: ''});

    const handleSubmit = e => {
        e.preventDefault();
        if (!name) {
            setAlert({show: true, msg: 'Please enter value', type: 'danger'});
        } else if (name && isEditing) {
            setList(list.map(item => {
                if (item.id === editID) {
                    return {...item, title: name};
                }
                return item;
            }));
            setName('');
            setEditID(null);
            setIsEditing(false);
            setAlert({show: true, msg: 'Value changed', type: 'success'});
        } else {
            setList([...list, {
                id: new Date().getTime().toString(),
                title: name
            }]);
            setAlert({show: true, msg: 'Item added to the list', type: 'success'});
            setName('');
        }
    }

    const editItem = id => {
        setIsEditing(true);
        setEditID(id);
        setName(list.find(item => item.id === id).title);
    }
    const removeItem = id => {
        setList(list.filter(item => item.id !== id));
        setAlert({show: true, type: 'danger', msg: 'Item removed from the list'})
    }
    const clearList = () => {
        setList([]);
        setAlert({show: true, type: 'danger', msg: 'Empty list'});
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    })
    return (
        <section className={"section-center"}>
            <form className={"grocery-form"} onSubmit={e => handleSubmit(e)}>
                {alert.show && <Alert {...alert} setAlert={setAlert} list={list}/>}
                <h3>Grocery Bud</h3>
                <div className={"form-control"}>
                    <input type={"text"} className={"grocery"} placeholder={"e.g. eggs"} value={name} onChange={e => {
                        setName(e.target.value);
                    }}/>
                    <button type={"submit"} className={"submit-btn"}>
                        {isEditing ? 'Edit' : 'Submit'}
                    </button>
                </div>
            </form>
            <div className={"grocery-container"}>
                {list.length > 0 &&
                <List list={list} removeItem={removeItem} editItem={editItem}/>}
                <button className={"clear-btn"} onClick={clearList}>Clear List</button>
            </div>

        </section>
    )
}

export default App
