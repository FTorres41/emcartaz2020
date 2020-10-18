import styled from 'styled-components';
import { Button as Btn, Input as Inpt } from 'rbx';

export const Button = styled(Btn)`
    display: flex;
    padding: 10px;
    margin-right: 5px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    text-transform: uppercase;

    &.submit {
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme.midGreen};
    }

    &.cancel {
        color: ${(props) => props.theme.midRed};
        background-color: ${(props) => props.theme.gray};
    }
`

export const Input = styled(Inpt)`
    width: 100%;
`