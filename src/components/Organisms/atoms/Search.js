import axios from 'axios';
import React, { useState } from 'react';
import './Search.css';
import styled from 'styled-components';
import VerticalLine from './VerticalLine';
import { Link } from 'react-router-dom';
import SearchArtistView from './SearchView/SearchArtistView';
import SearchAlbumView from './SearchView/SearchAlbumView';
import SearchTrackView from './SearchView/SearchTrackView';
import MainView from './SearchView/MainView';

const SearchBar = styled.input`
    width: 50vh;
    height: 3.5vh;
    font-size: 1.8vh;
    border-radius: 100px;
    border: none;
    padding-top: 0.4vh;
    padding-left: 1vh;
    background-color: white;
    outline: none;
    &:focus{
        outline: none;
    }
`

const InputArea = styled.div`
    width: 60vh;
    height: 4vh;
    display: flex;
    border-radius: 100px;
    background-color: #ffffff;
`

const ViewArea = styled.div`

`

const Search = () => {
    const [ input, setInput ] = useState({
        data: '',
    });

    const [value, setValue] = useState({
        value: '',
    });

    const [res, setRes] = useState([]);

    // const [loading, setLoading] = useState(false);


    const token = sessionStorage.getItem('token');
    const { data } = input;

    const onChange = (e) => {
        const { value, data } = e.target;
        setInput({
          ...input,
          [data]: value
        });

        console.log(value);
        const inputData = value;

        sessionStorage.setItem('inputData', inputData);
    }
    
    const onList = (e) => {
        let {name, value} = e.target;

        setValue({
            [name]: value,
        });

        console.log(e.target.value);
        const inputType = e.target.value;

        sessionStorage.setItem('inputType', inputType);
    }

    const onClick = () => {
        const inputSearchData = sessionStorage.getItem('inputData');
        const inputTypeData = sessionStorage.getItem('inputType');
        
        // console.log(inputTypeData)
        axios({
            headers: {  
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: 'GET',
            url: 'https://api.spotify.com/v1/search',
            params: {
                q: inputSearchData,
                type: inputTypeData,
            },
        }).then((res) => {
            setRes([res]);

            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    const inputTypeData = sessionStorage.getItem('inputType');
    // if (loading) {
    //     return <p>Data is loading...</p>;
    // }

    return(
        <div>
            <InputArea>
                <select name="menu" id="select" onChange={onList}>
                    <option value="artist">Artist</option>
                    <option value="track">Music</option>
                    <option value="album">Album</option>
                </select>
                <SearchBar onChange={onChange} placeholder="Artist, Music..." />
                <button className="btn" onClick={onClick}>Search</button>
            </InputArea>
            <ViewArea>
                {inputTypeData == 'artist' && <SearchArtistView/>}
                {inputTypeData == 'track' && <SearchTrackView/>}
                {inputTypeData == 'album' && <SearchAlbumView/>}
                {!inputTypeData && <MainView/>}
            </ViewArea>
        </div>
    )
}

export default Search;