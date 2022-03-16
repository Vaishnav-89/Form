import React, { useState, useEffect } from 'react';

import '../App.css';
import Axios from 'axios';

import { useHistory } from 'react-router-dom'

function Delete() {

    let history = useHistory();

    const [id, setid] = useState()

    const deleteData = () => {
        Axios.delete(`http://localhost:3001/delete/${id}`)
            .then(alert("Delted Successfully !"))
    }

    return (
        <div className="App">

            <h1 className="title">Delete Form </h1>

            <div className="form">
                <label htmlFor="id">Enter ID : </label>
                <input type="number" name="id" onChange={(e) => setid(e.target.value)} />

                <div className="formBtnSec">
                    <button onClick={deleteData}>DELETE</button>
                    <button onClick={() => { history.goBack() }}>Go To - Home</button>
                </div>
            </div>
        </div>
    );
}

export default Delete;
