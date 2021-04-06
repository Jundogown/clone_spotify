import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromResponse } from './components/spotify';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Main from './components/Main';

const App = () => {
    const [token, setToken] = useState(null);

    useEffect(()=> {
        const hash = getTokenFromResponse();
        window.location.hash = "";
        const token = hash.access_token;

        console.log('token', token);

        const userManager = {
          token : token,
        };

        console.log(userManager);

        setToken(token);
        
    }, []);
    return(
        <div className="login">
          {!token && <Login/>}
          {token && <Main/>}
          {/* <Main/> */}
        </div>
    )
}

export default App;
