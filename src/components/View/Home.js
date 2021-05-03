import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Home =() => {
    const token = sessionStorage.getItem('token');
    
    axios({
        headers:{
            "Authorization": `Bearer ${token}`
        },
        method: 'GET',
        url: '',
    }).then((res) => {
        console.log(res);
    }).catch(error => {
        console.log(error);
    })
}

export default Home;