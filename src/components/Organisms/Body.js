import react from 'react';
import Search from './atoms/Search'
import styled from 'styled-components';

const BodyContainer = styled.div`
    padding: 30px;
    height: 85vh;
    overflow-y: overlay;
    width: 159.9vh;
    color: white;
    background: linear-gradient(transparent, rgba(0, 0, 0, 1));
    background-color: rgb(91, 87, 115);
`;

const Body = () => {
    return(
        <div>
            <BodyContainer>
                <Search/>
            </BodyContainer>
        </div>
    );
}

export default Body;    