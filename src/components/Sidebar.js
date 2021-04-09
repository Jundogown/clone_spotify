import React from "react";
import styled from 'styled-components';
import Option from './atoms/Option';
import Line from './atoms/Line';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import axios from 'axios';

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

const LogoImg = styled.img`
    margin-right: auto;
    object-fit: contain;
    width: 0 auto;
    height: 130px;
`;

const StringTitle = styled.span`
    font-weight: 650;
    padding-left: 18px;
    padding-top: 8px;
    margin: 0;
`;

const Sidebar = () => {
    const token = sessionStorage.getItem('token');
    const user_id = sessionStorage.getItem('userId');

    axios({
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: 'GET',
        url: `https://api.spotify.com/v1/users/${user_id}/playlists`,
    }).then((res) => {
        console.log(res);
        console.log(res.data.item);
        
    }).catch(error => {
        console.log(error);
    });
    
    return(
        <div>
            <SideBackground>
                <LogoImg src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"></LogoImg>
                <Option Icon={HomeIcon} title="Home"/>
                <Option Icon={SearchIcon} title="Search"/>
                <Option Icon={LibraryMusicIcon} title="Library"/>

                <StringTitle>PLAYLIST</StringTitle>
                <Line/>

                <Option/>
            </SideBackground>
        </div>
    );
}

export default Sidebar;