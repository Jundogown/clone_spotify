import react from 'react';
import styled from 'styled-components';

const SidebarOption = styled.div`
    color: #ffffff;
    padding-left: 24px;
    font-size: ;
`

const Option = ({ title, icon }) => {
    return(
        <SidebarOption>
            <span>
                {title}
            </span>
        </SidebarOption>
    );
}

export default Option;