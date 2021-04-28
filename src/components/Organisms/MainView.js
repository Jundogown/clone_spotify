import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const MainView = () => {
    const token = sessionStorage.getItem('token');
     

    axios({
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: 'GET',
        url: 'https://api.spotify.com/v1/browse/new-releases',
    }).then((res)=>{
        console.log(res);
    }).catch(error => {
        console.log(error);
    })

    return(
        <div>
            
        </div>
    )
}

export default MainView;