import styled from 'styled-components';
import { ListItem } from '@material-ui/core';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 700px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
`;

export const VideoItem = styled(ListItem)`
    cursor: pointer;

    svg {
        margin-right: 10px;
    }

    .MuiListItemText-root {
        font-weight: 700;
    }

    .MuiListItemText-root:hover {
        color: ${(props) => props.theme.pink};
    }
`;