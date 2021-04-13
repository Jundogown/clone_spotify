import react from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
    width: 50vh;
    height: 6vh;
    font-size: 3vh;
    border-radius: 100px;
    background-color: white;
    outline: none;
    &:focus{
        outline: none;
    }
`

const Search = () => {
    return(
        <SearchBar>
        </SearchBar>
    )
}

export default Search;