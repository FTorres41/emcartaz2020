import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';

export const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`;

export const Content = styled(Row)`
    justify-content: space-between;
`