import React, { useState, useEffect } from 'react';
import '../App.css';
import Axios from 'axios';


import { useHistory } from 'react-router-dom'

function Display() {

    let history = useHistory();

    const [id, setid] = useState();
    const [idData, setidData] = useState([]);


    const displaydata = () => {
        //console.log("*********88" + idData);

        Axios.get(`http://localhost:3001/display/${id}`)
            .then(
                (response) => {
                    // console.log(response.data);
                    setidData(response.data);
                    //console.log(idData);
                }
            );
        //console.log("*********88" + idData);

    }

    return (
        <div className="App">

            <h1 className="title">Display Form </h1>

            <div className="form">
                <label htmlFor="id">Enter ID : </label>
                <input type="number" name="id" onChange={(e) => setid(e.target.value)} />

                <div className="formBtnSec">
                    <button onClick={displaydata}>DISPLAY</button>
                    <button onClick={() => { history.goBack() }}>Go To - Home</button>
                </div>

            </div>

            {idData[0] ?
                <div className="display">
                    <div><h4>ID     : </h4><p>{idData[0].id}</p></div>
                    <div><h4>NAME   : </h4><p>{idData[0].name}</p></div>
                    <div><h4>YEAR   : </h4><p>{idData[0].year}</p></div>
                    <div><h4>GENDER : </h4><p>{idData[0].gender}</p></div>
                    <div><h4>CITY   : </h4><p>{idData[0].city}</p></div>
                </div>

                :
                null}

        </div>
    );
}

export default Display;
