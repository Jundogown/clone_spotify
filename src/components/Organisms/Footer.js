import react from 'react';
import styled from 'styled-components'

const FooterContainer = styled.div`
    position: fixed;
    bottom: 0;
    height: 65px;
    width: 100%;
    background: #282828;
    padding: 15px;
`;

const Footer = () => {
    return(
        <FooterContainer/>
    )
}

export default Footer;