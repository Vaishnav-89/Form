import React, { useState, useEffect } from 'react';
import '../App.css';
import Axios from 'axios';


import { useHistory } from 'react-router-dom'


function Create() {

    let history = useHistory();

    const [id, setid] = useState();
    const [name, setname] = useState();
    const [year, setyear] = useState();
    const [gender, setgender] = useState();
    const [city, setcity] = useState();

    const submitForm = () => {
        Axios.post("http://localhost:3001/insert/",
            { id: id, name: name, year: year, gender: gender, year: year, city: city })
            .then(
                // () => {
                alert('Created Successfully !')
                //}
            )
    }

    return (
        <div className="App">
            <h1 className="title">Create Form </h1>

            <div className="form">


                <label htmlFor="id">Enter ID : </label>
                <input type="number" name="id" onChange={(e) => setid(e.target.value)} />

                <label htmlFor="name">Enter Name : </label>
                <input type="text" name="name" onChange={(e) => setname(e.target.value)} />

                <label htmlFor="year">Enter Year of Study : </label>
                <input type='number' name="year" onChange={(e) => setyear(e.target.value)} />

                <label>Select Gender : </label>

                <div className="radiobtn" onChange={(e) => setgender(e.target.value)}>
                    <input id="Gender1" type="radio" name="gender" value="Male" />
                    <label htmlFor="Gender1"> Male </label>
                    <input id="Gender2" type="radio" name="gender" value="Female" />
                    <label htmlFor="Gender2"> Female </label>
                </div>

                <label htmlFor="city">Enter City : </label>
                <input type="text" name="city" onChange={(e) => setcity(e.target.value)} />
                <div className="formBtnSec">
                    <button onClick={submitForm} >REGISTER</button>
                    <button onClick={() => { history.goBack() }}>Go To - Home</button>
                </div>
            </div>
        </div>
    );
}

export default Create;
