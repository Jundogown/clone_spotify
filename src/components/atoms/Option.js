import { IconButton } from '@material-ui/core';
import react from 'react';
import styled from 'styled-components';

const SidebarOption = styled.div`
    display: flex;
    color: #949699;
    align-items: center;
    cursor: pointer;
    padding-left: 18px;
    transition: 200ms color ease-in;
    &:hover {
        color: #ffffff;
    }
`;

const Span = styled.span`
    margin-top: 8px;
    margin-left: 2px;
    font-size: 14px;
`;

const Icon = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`;

const Option = ({ title , Icon }) => {
    return(
        <SidebarOption>
            {Icon && <Icon/>}
            {Icon ? <h4>{title}</h4> : <Span>{title}</Span>}
        </SidebarOption>
    );
}

export default Option;