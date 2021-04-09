import react from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Body from './atoms/Body';
import Footer from './atoms/Footer';
import axios from 'axios';

const MainContainer = styled.div`
    display: flex;
`

const Main = () => {
    const token = sessionStorage.getItem('token');

    console.log(token);
    
    axios({
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: 'GET',
        url: `https://api.spotify.com/v1/me`,
    }).then((res) => {
        console.log(res);
        const userid = res.data.id;
        sessionStorage.setItem("userId", userid);
        
    }).catch(error => {
        console.log(error);
    });

    return(
        <div className="player">
            <MainContainer>
                <Sidebar/>
                <Body/>
            </MainContainer>
            <Footer/>
        </div>
    );
}

export default Main; 