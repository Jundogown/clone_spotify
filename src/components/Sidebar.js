import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Option from './Organisms/atoms/Option';
import Line from './Organisms/atoms/Line';
import HomeIcon from '@material-ui/icons/Home';
import Button from './Organisms/atoms/Button';
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
    background-color: #000000;
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

const PrintList = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 30vh;
    height: 20px;
    padding-top: 8px;
    padding-bottom: 8px;
`;

const Sidebar = () => {
    const [playList, setPlayList] = useState([]);
    const token = sessionStorage.getItem('token');
    const user_id = sessionStorage.getItem('userId');
    // console.log(user_id);

    useEffect(() => {
        axios({
            headers: {
                "Authorization": `Bearer ${token}`
            },
            method: 'GET',
            // url: `https://api.spotify.com/v1/users/${user_id}/playlists`,
            url: `https://api.spotify.com/v1/me/playlists`,
            data: {
                limit: "15",
                offset: "10",
            }
        }).then((res) => {
            console.log(res);
            console.log(res.data.items[0].name);
            // setArray()
            let playlist = [];
            for(let i = 0; i<res.data.items.length; i++){
                playlist = [res.data.items];
            }
            
            setPlayList(playlist[0]);
    
        }).catch(error => {
            console.log(error);
        });
    }, [token, user_id]);

    // async function buttonClick() {
        
    //     console.log('안녕');

    //     axios({
    //         headers: {
    //             "Authorization": `Bearer ${token}`,
    //         }, 
    //         method: 'POST',
    //         url: `https://api.spotify.com/v1/users/b30w7igvenuo3cclg5y0c7ddn/playlists`,
    //         data: {
    //             name: "내플레이리스트",
    //             public: true,
    //             collaborative: "",
    //             description: "",
    //             'Content-Type': "application/json"
    //         },
    //     }).then((res) => {
    //         console.log(res);
    
    //     }).catch(error => {
    //         console.log(error);
    //     });
    // }

    return(
        <div>
            <SideBackground>
                <LogoImg src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"></LogoImg>
                <Option Icon={HomeIcon} title="Home"/>
                <Option Icon={SearchIcon} title="Search"/>
                <Option Icon={LibraryMusicIcon} title="Library"/>

                {/* <Button onClick={buttonClick} title="안녕"/> */}
                {/* <button onClick={buttonClick}>하이</button> */}

                <StringTitle>PLAYLIST</StringTitle>
                <Line/>
                    {
                        playList.map(({ name }) => <PrintList>{name}</PrintList>)
                    }
                <Option/>
            </SideBackground>
        </div>
    );
}

export default Sidebar; 