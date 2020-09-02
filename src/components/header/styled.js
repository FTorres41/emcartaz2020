import styled from 'styled-components';
import { Tab, Toolbar } from '@material-ui/core';

export const HeaderBar = styled(Toolbar)`
    background-color: ${(props) => props.theme.blue};
`

export const HeaderTab = styled(Tab)`
    color: ${(props) => props.theme.white} !important;
    font-weight: bold !important;
`
