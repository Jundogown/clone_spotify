import react from 'react';
import styled from 'styled-components';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIocn from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';

const FooterContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    height: 65px;
    width: 100%;
    background: #282828;
    padding: 15px;
`;

const FooterLeft = styled.div`
    flex: 0.3;
`;

const FooterCenter = styled.div`
    flex: 0.5;
    padding: 0 100px;
    color: white;
    display: felx;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
`;

const FooterRight = styled.div`
    flex: 0.25;
`;

const Footer = () => {
    return(
        <FooterContainer>
            <FooterLeft>
                <span>track name</span>
            </FooterLeft>
            <FooterCenter>
                <ShuffleIcon/>
                <SkipPreviousIcon/>
                <PlayCircleOutlineIcon/>
                <SkipNextIocn/>
                <RepeatIcon/>
            </FooterCenter>
            <FooterRight>
                <Grid></Grid>
            </FooterRight>
        </FooterContainer>
    )
}

export default Footer;