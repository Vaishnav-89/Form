import React, { useState, useEffect } from 'react';
import '../App.css';

import Axios from 'axios';


import { useHistory } from 'react-router-dom'

function Update() {

    let history = useHistory();

    const [id, setid] = useState();
    const [name, setname] = useState();
    const [year, setyear] = useState();
    const [gender, setgender] = useState();
    const [city, setcity] = useState();



    const getRemainingData = () => {

        Axios.get(`http://localhost:3001/display/${id}`)
            .then(
                (response) => {
                    if (response.data[0]) {
                        setname(response.data[0].name);
                        setyear(response.data[0].year);
                        setgender(response.data[0].gender);
                        setcity(response.data[0].city);
                    }
                }
            ).catch((err) => console.log(err));

    }


    const updateData = () => {
        Axios.put("http://localhost:3001/edit/",
            { id: id, name: name, year: year, gender: gender, year: year, city: city })
            .then(alert("Updated Successfully !"));

    }

    return (
        <div className="App">

            <h1 className="title">Update Form </h1>
            <div className="rowtrans">

                <div className="form">

                    <div id="enterID">

                        <label htmlFor="id">Enter ID : </label>

                        <input type="number" name="id" onChange={(e) => {
                            setid(e.target.value);
                        }} />

                        <button onClick={() => getRemainingData()}>Get Data</button>

                    </div>

                    <label htmlFor="name">Enter Name : </label>
                    <input type="text" name="name" onChange={(e) => setname(e.target.value)} />

                    <label htmlFor="year">Enter Year of Study : </label>
                    <input type='number' name="year" onChange={(e) => setyear(e.target.value)} />

                    <label>Select Gender : </label>

                    <div className="radiobtn" onChange={(e) => {
                        setgender(e.target.value);
                        //   getRemainingData(e.target.value);
                    }}>
                        <input id="Gender1" type="radio" name="gender" value="Male" />
                        <label htmlFor="Gender1"> Male </label>
                        <input id="Gender2" type="radio" name="gender" value="Female" />
                        <label htmlFor="Gender2"> Female </label>

                    </div>

                    <label htmlFor="city">Enter City : </label>
                    <input type="text" name="city" onChange={(e) => setcity(e.target.value)} />


                    <div className="formBtnSec">
                        <button onClick={updateData}>UPDATE</button>
                        <button onClick={() => { history.goBack() }}>Go To - Home</button>
                    </div>

                </div>

                <div id="updatedis">
                    {
                        name ?
                            <div className="display">

                                <div><h4>NAME   : </h4><p>{name}</p></div>
                                <div><h4>YEAR   : </h4><p>{year}</p></div>
                                <div><h4>GENDER : </h4><p>{gender}</p></div>
                                <div><h4>CITY   : </h4><p>{city}</p></div>
                                
                            </div>
                            :
                            null
                    }
                </div>

            </div>
        </div>
    );
}

export default Update;
