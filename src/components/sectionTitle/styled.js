import styled from 'styled-components';

export const Container = styled.div`
    border-bottom: 3px solid ${(props) => props.color};
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    padding-top: 20px;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    
    h2 {
        color: ${(props) => props.color};
        margin: 7px 0;
    }
`