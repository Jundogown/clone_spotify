import React from 'react'
import styled from 'styled-components'
import { accessUrl } from './atoms/spotify';

const LoginBackground = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: black;
`;

const LoginBtn = styled.a`
    padding: 20px;
    border-radius: 99px;
    font-weight: 600;
    color: white;
    text-decoration: none;
    background-color: #1db954;
`;

const LogoImg = styled.img`
    width: auto;
    height: 200px;
`;

const Login = () => {
    return(
        <LoginBackground>
            <LogoImg src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"></LogoImg>
            <LoginBtn href={accessUrl}>LOGIN WITH SPOTIπ</LoginBtn> 
        </LoginBackground>
    );
}

export default Login;