import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

export const AuthorContainer = styled(Row)`
    align-items: center;
    justify-content: center;
    height: auto;
    border: 1px solid ${(props) => props.cor ? props.cor : props.theme.blue};

    img {
        display: flex;
        border-radius: 70px;
        align-items: center;
        width: 70%;
        margin: 5px auto !important;
    }

    p {
        font-size: 13px;
    }
`