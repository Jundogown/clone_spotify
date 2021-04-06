import react from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Body from './Body';

const MainContainer = styled.div`
    display: flex;
`

const Main = () => {
    return(
        <div className="player">
            <MainContainer>
                <Sidebar/>
                <Body/>
            </MainContainer>
        </div>
    );
}

export default Main; 