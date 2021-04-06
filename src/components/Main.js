import react from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Body from './atoms/Body';
import Footer from './atoms/Footer';

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
            <Footer/>
        </div>
    );
}

export default Main; 