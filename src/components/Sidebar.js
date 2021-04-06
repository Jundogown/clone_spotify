import React from "react";
import styled from 'styled-components';
import Option from './atoms/Option';

const SideBackground = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vh;
    padding-left: 10px;
    padding-right: 10px;
    min-width: 230px;
    height: 91vh;
    color: white;
    background-color: #040404;
`;

const LogoImg  = styled.img`
    margin-right: auto;
    object-fit: contain;
    width: 0 auto;
    height: 130px;
`;

const Sidebar = () => {
    return(
        <div>
            <SideBackground>
                <LogoImg src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"></LogoImg>
                <Option title="Home"/>
                <Option title="Search"/>
                <Option title="Library"/>
            </SideBackground>
        </div>
    );
}

export default Sidebar;