import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import { isMobile } from 'react-device-detect';

export const AuthorContainer = styled(Row)`
    align-items: center;
    justify-content: center;
    height: auto;
    border: 1px solid ${(props) => props.cor ? props.cor : props.theme.blue};

    img {
        display: flex;
        border-radius: ${ isMobile ? '50px' : '70px' };
        align-items: center;
        width: ${ isMobile ? '50%' : '70%' };
        margin: 5px auto !important;
    }

    p {
        font-size: 13px;
    }
`