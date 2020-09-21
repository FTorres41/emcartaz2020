import styled from 'styled-components';
import { Card, CardActionArea } from '@material-ui/core';

export const StyledCard = styled(Card)`
    max-width: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    margin: 15px 0;
    background-color: ${(props) => props.theme.black} !important;

    @media (max-width: 400px) {
        margin: 15px auto;
    }
`;

export const StyledActionArea = styled(CardActionArea)`
    .MuiCardMedia-root {
        min-height: ${(props) => props.size}px;
        position: relative;
    }

    .MuiCardContent-root {
        color: ${(props) => props.theme.white};
        background-color: rgba(55,55,55,0.7);
        padding: 10px !important;
        position: absolute;
        z-index: 10;
        bottom: 0;
        width: 100%;

        h2 {
            font-size: 1.1rem !important;
        }
    }
`;
