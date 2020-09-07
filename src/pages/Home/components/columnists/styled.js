import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

export const Container = styled.div`
    max-width: 1280px;
    margin: 20px 0;
`;

export const ColunaContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 200px;

    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: black;
        font-size: 18px;
    }

    img {
        margin: 10px;
        border: 2px solid ${(props) => props.theme.gray};
        border-radius: 90px;
        max-width: 180px;
        max-height: 180px;
    }

    p {
        font-weight: 600;
    }
`;

export const LogoRow = styled(Row)`
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto !important;
`;
