import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import { Tab } from '@material-ui/core';

export const Container = styled(Row)`
    margin-top: 20px !important;
    background-color:  ${(props) => props.theme.blue};
    flex-wrap: nowrap;
    left: 0;
    right: 0;
    bottom: 0;
    position: initial;

    .MuiTabs-root {
        max-width: 1280px;
        margin: 0 auto;
    }
`;

export const FooterTab = styled(Tab)`
    color: ${(props) => props.theme.white} !important;
    font-weight: bold !important;
    width: auto !important;
    font-size: 13px !important;
    max-width: 160px !important;
    min-width: 1px !important;
`