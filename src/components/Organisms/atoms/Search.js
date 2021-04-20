import axios from 'axios';
import react, { useState } from 'react';
import './Search.css';
import styled from 'styled-components';
import VerticalLine from './VerticalLine';

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

const Search = () => {
    const [ input, setInput ] = useState({
        data: '',
    });

    const [value, setValue] = useState({
        value: 'artist',
    });


    const token = sessionStorage.getItem('token');
    const { data } = input;

    const onChange = (e) => {
        localStorage.setItem('inputData', 'artist');

        const { value, data } = e.target;
        setInput({
          ...input,
          [data]: value
        });

        console.log(value);
        const inputData = value;

        localStorage.setItem('inputData', inputData);
    }
    
    const onList = (e) => {
        let {name, value} = e.target;

        setValue({
            [name]: value,
        });

        console.log(e.target.value);
        const inputType = e.target.value;

        localStorage.setItem('inputType', inputType);
    }

    const onClick = () => {
        const inputSearchData = localStorage.getItem('inputData');
        const inputTypeData = localStorage.getItem('inputType');

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
            console.log(res);
        }).catch(err => {
            console.log(err);
        })
    }

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
        </div>
    )
}

export default Search;