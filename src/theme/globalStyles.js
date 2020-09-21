import { createGlobalStyle } from "styled-components";
import Roboto from '../assets/Roboto-Regular.ttf';

// @import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto|Pacifico');
export default createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  html{
    overflow-y:auto!important;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: url(${Roboto});
    background-color: ${(props) => props.theme.white};
  }

  .row {
    width: 100%;
    margin: 0;
  }
`;

export const theme = {
  black: "#373737",
  blue: "#2e3192",
  brown: "#704936",
  green: "#387938",
  orange: "#f47521",
  pink: "#e24e91",
  purple: "#6964ad",
  red: "#ed1c24",
  white: "#FFFFFF",
  yellow: "#ffcd07",
  lightBlue: "#00aeef",
  lightGreen: "#a1cc3a",
  gray: "#edeef0",
  darkGray: "#8c8c8c",
};

export const devices = {
  mobile: '468px',
  tablet: '800px',
  laptop: '1024px',
  desktop: '1200px',
}