import React, { useState, useEffect } from 'react'
import "../Style.css"



const getLocalItmes = () => {

    let list = localStorage.getItem('lists');


    if (list) {
        return JSON.parse(localStorage.getItem('lists'));
    } else {
        return [];
    }
}

const Todo = () => {




    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalItmes());
    const [toggleSubmit, setToggleSubmit] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if (!inputData) {
            alert('plzz fill data');
        } else if (inputData && !toggleSubmit) {
            setItems(
                items.map((elem) => {
                    if (elem.id === isEditItem) {
                        return { ...elem, name: inputData }
                    }
                    return elem;
                })
            )
            setToggleSubmit(true);

            setInputData('');

            setIsEditItem(null);
        } else {
            const allInputData = { id: new Date().getTime().toString(), name: inputData }
            setItems([...items, allInputData]);
            setInputData('')
        }
    }


    const deleteItem = (index) => {
        const updateditems = items.filter((elem) => {
            return index !== elem.id;
        });

        setItems(updateditems);
    }

    const editItem = (id) => {
        let newEditItem = items.find((elem) => {
            return elem.id === id
        });
        console.log(newEditItem);

        setToggleSubmit(false);

        setInputData(newEditItem.name);

        setIsEditItem(id);

    }


    // remove all 
    const removeAll = () => {
        setItems([]);
    }

    // add data to localStorage
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    }, [items]);

    const [users, setUsers] = useState([])
    const getUsers = async () => {
        const response = await fetch(' https://picsum.photos/id/77/info')
        setUsers(await response.json())
    }
    useEffect(() => {
        getUsers()
    }, [])


    return (
        <div className='main'>
            <div className='head'>
                <div className='head-title'>
                    <img src="https://img.icons8.com/bubbles/50/000000/bbb.png" />
                    <h3 className='heading'>TaskBoard</h3>
                </div>
                <div className='head-title'>
                    <img src="https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-User-essential-collection-bearicons-glyph-bearicons.png" width='30' />
                    {users.author}
                </div>
            </div>





            <div className="main-div">

                <div className="child-div">





                    <figure>

                        <figcaption>My Tasks</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder=" Add Tasks..."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                            className="input"

                        />
                        {
                            toggleSubmit ? <i className="fa fa-plus add-btn add  " title="Add Item" onClick={addItem}></i> :
                                <i className="far fa-edit add-btn" title="Update Item" onClick={addItem}></i>
                        }

                    </div>

                    <div className="showItems">

                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" onClick={() => editItem(elem.id)}></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => deleteItem(elem.id)}></i>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>

                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span> CHECK LIST </span> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo

