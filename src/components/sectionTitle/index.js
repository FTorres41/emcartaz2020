import React from 'react';
import { Container } from './styled';

const SectionTitle = ({value, color, goTo}) => {
    return (
        <Container color={color} onClick={goTo} style={{ cursor: goTo ? 'pointer' : 'default'}}>
            <h2>{value}</h2>
        </Container>
    )
}

export default SectionTitle;