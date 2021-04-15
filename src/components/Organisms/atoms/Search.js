import axios from 'axios';
import react, { useState } from 'react';
import './Search.css';
import styled from 'styled-components';
import Select from 'react-select'

const SearchBar = styled.input`
    width: 50vh;
    height: 3.5vh;
    font-size: 1.8vh;
    border-radius: 100px;
    border: none;
    padding-left: 20px;
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
    background-color: #ffffff;
`

const Search = () => {
    const [ input, setInput ] = useState({
        data: '',
    });

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

        localStorage.setItem('inputData', inputData);
    }
    
    const onClick = () => {
        const inputData = localStorage.getItem('inputData');

        axios({
            headers: {  
                "Authorization": `Bearer ${token}`,
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            method: 'GET',
            url: 'https://api.spotify.com/v1/search',
            params: {
                q: inputData,
                type: 'track',
            },
        }).then((res) => {
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

    // const options = [
    //     { value: 'Artist', label: 'Artist' },
    //     { value: 'Music', label: 'Music' },
    //     { value: 'Album', label: 'Album' }
    // ]

    // console.log(inputData);

    return(
        <div>
            <InputArea>
                <select name="menu">
                    <option value="Artist">Artist</option>
                    <option value="Music">Music</option>
                    <option value="Album">Album</option>
                </select>
                <SearchBar onChange={onChange} placeholder="Artist, Music..." />
                <button className="btn" onClick={onClick}></button>
            </InputArea>
        </div>
    )
}

export default Search;