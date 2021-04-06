import React from "react";
import styled from 'styled-components';

const SideBackground = styled.div`
    background-color: black;
    height: 100vh;
    ${'' /* flex: 30%; */}
    width: 30vh;
    text-align: center;
`;

const LogoImg  = styled.img`
    width: auto;
    height: 130px;
`;

const Sidebar = () => {
    return(
        <div>
            <SideBackground>
                <LogoImg src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"></LogoImg>
            </SideBackground>
        </div>
    );
}

export default Sidebar;