import react from 'react';
import Option from './atoms/Option';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import LikeIcon from '@material-ui/icons/Favorite';


const Button = () => {
    return(
        <div>
            <Option Icon={AddIcon} title="Create Playlist"/>
            <Option Icon={LikeIcon} title="Like sing"/>
        </div>
    );
}

export default Button;