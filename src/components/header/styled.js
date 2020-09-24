import styled from 'styled-components';
import { Row } from 'react-flexbox-grid';
import { Menu, Tab, Toolbar } from '@material-ui/core';

export const HeaderBar = styled(Toolbar)`
    background-color: ${(props) => props.theme.white};
    flex-flow: column nowrap;

    .header-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1280px;
        height: 190px;
    }
`

export const HeaderTab = styled(Tab)`
    color: ${(props) => props.theme.white} !important;
    font-weight: bold !important;
    width: auto !important;
    font-size: 13px !important;
    max-width: 160px !important;
    min-width: 1px !important;
`

export const TabsRow = styled(Row)`
    background-color:  ${(props) => props.cor ? props.cor : props.theme.blue};
    flex-wrap: nowrap;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;

    .MuiTabs-root {
        max-width: 1280px;
        margin: 0 auto;
    }

    .MuiTabs-flexContainer {
        display: flex;
        justify-content: space-around;
    }
`;

export const MobileMenu = styled(Menu)`
    .MuiPaper-root {
        width: 100%;
        color: ${(props) => props.cor === props.theme.yellow ? props.theme.black : props.theme.white };
        background-color: ${(props) => props.cor ? props.cor : props.theme.blue};
    }
`