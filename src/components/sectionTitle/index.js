import React from 'react';
import { Container } from './styled';

const SectionTitle = ({value, color}) => {
    return (
        <Container color={color}>
            <h2>{value}</h2>
        </Container>
    )
}

export default SectionTitle;