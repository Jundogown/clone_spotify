import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login'
import { getTokenFromResponse } from './components/spotify';

const App = () => {
    const [token, setToken] = useState(null);

    useEffect(()=> {
        const hash = getTokenFromResponse();
        window.location.hash = "";
        const token = hash.access_token;

        console.log('token', token);
    }, []);
    return(
        <div className="login">
            <Login/>
        </div>
    )
}

export default App;
