import react from 'react';
import styled from 'styled-components';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIocn from '@material-ui/icons/SkipNext';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from '@material-ui/core';
import PlayListPlayIcon from  '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from  '@material-ui/icons/VolumeDown';
import './Footer.css';

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
    max-width: 420px;
    display: flex;
    color: white;
    align-items: center;
`;

const FooterCenter = styled.div`
    flex: 0.8;
    padding: 0 100px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
`;

const FooterRight = styled.div`
    flex: 0.25;
    color: white;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
`;

const FooterRightWarp = styled.div`
    padding-left: 14.4vh;
    display: flex;
`

const FooterTrackImg = styled.img`
    height: 60px;
    width: 60px;
    margin-right: 20px;
    object-fit: contain;
`

const FooterTrackInfo = styled.div`
    
`

const Footer = () => {
    return(
        <FooterContainer>
            <FooterLeft>
                <FooterTrackImg src="" alt="" />
                <FooterTrackInfo>
                    {<b>Play Music</b>}
                    <br/>
                    {<span>....</span>}
                </FooterTrackInfo>
            </FooterLeft>
            <FooterCenter>
                <ShuffleIcon/>
                <SkipPreviousIcon/>
                <PlayCircleOutlineIcon className="playIcon"/>
                <SkipNextIocn/>
                <RepeatIcon/>
            </FooterCenter>
            <FooterRight>
                <FooterRightWarp>
                    <Grid container spacing={2}>
                        <Grid>
                            <PlayListPlayIcon/>
                        </Grid>
                        <Grid>
                            <VolumeDownIcon className="volumDownIcon"/>
                        </Grid>
                        <Grid>
                            <Slider/>
                        </Grid>
                    </Grid>
                </FooterRightWarp>
            </FooterRight>
        </FooterContainer>
    )
}

export default Footer;