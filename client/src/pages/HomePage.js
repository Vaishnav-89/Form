import React, { useState, useEffect } from 'react';
import '../App.css';

import { useHistory } from 'react-router-dom'


function Home() {

    let history = useHistory();

    return (
        <div className="App">

            <h1 className="title">Form Application</h1>
            <div className="homeBtn">
                <button onClick={() => history.push("/register")}>Register</button>
                <button onClick={() => history.push("/display")}>Display</button>
                <button onClick={() => history.push("/edit")}>Edit</button>
                <button onClick={() => history.push("/delete")}>Delete</button>
            </div>
        </div>
    );
}

export default Home;
