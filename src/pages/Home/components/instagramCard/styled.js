import styled from "styled-components";
import EmCartazInstagram from "../../../../assets/emcartaz-instagram.png";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.width}px;
  margin: 0 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  .powered-by {
    display: none !important;
  }

  iframe {
    padding-top: 10px;

    html.hide-header .powered-by {
      display: none !important;
    }

    html.fixed-rows-3.hide-header .checkin-wrapper-without-message {
      display: none !important;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  width: ${(props) => props.width}px;
  height: 400px;
  background-image: url(${EmCartazInstagram});
  background-size: contain;
`