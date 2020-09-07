import React from 'react';
import { ContainerDiv } from './styled';

const Container = ({children}) => {
    return (
    <ContainerDiv>
        {children}
    </ContainerDiv>
    )
};

export default Container;