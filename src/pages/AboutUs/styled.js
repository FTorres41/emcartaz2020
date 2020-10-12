import styled from "styled-components";
import Danielle from "../../assets/equipe/danielle.jpeg";
import Eduardo from "../../assets/equipe/eduardo.jpeg";
import Fabio from "../../assets/equipe/fabio.jpeg";
import Gisleine from "../../assets/equipe/gisleine.jpeg";
import Henrique from "../../assets/equipe/henrique.jpeg";
import Tamie from "../../assets/equipe/tamie.jpeg";
import Gabriel from "../../assets/equipe/gabriel.jpeg";
import Juliana from "../../assets/equipe/juliana.jpeg";
import Oscar from "../../assets/equipe/oscar.jpeg";

export const Content = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;

export const Article = styled.div`
  margin: 20px 0 !important;
  height: 100%;
  width: 100%;

  .categoria {
    background-color: ${(props) => (props.cor ? props.cor : props.theme.blue)};
    width: fit-content;
    color: ${(props) => props.theme.white};
    padding: 5px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }

  hr {
    margin: 0 !important;
    color: ${(props) => (props.cor ? props.cor : props.theme.blue)};
    border: 2px solid ${(props) => (props.cor ? props.cor : props.theme.blue)};
  }

  .autor {
    font-size: 14px;
    color: ${(props) => props.theme.darkGray};
    margin: 10px 0;
  }

  .aligncenter,
  div.aligncenter {
    float: none;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  ul {
    margin-left: 15px;
    margin-bottom: 10px;
  }

  img {
    vertical-align: middle;
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    border: 0;
  }

  p {
    margin-bottom: 10px;
  }

  .texto {
    p {
      display: inline-block;
      text-align: justify;
    }
  }

  .equipe {
    h3 {
      margin: 5px 0;
    }
  }

  .row {
    margin: 10px 0 !important;

    .col-lg-2,
    .col-lg-10 {
      display: flex;
      align-items: center;

      div {
        display: flex;
        text-align: justify;
        flex-direction: column;
      }

      .redes-sociais {
        margin: 10px 0 !important;
        display: flex;
        text-align: justify;
        flex-direction: row;

        strong {
          margin: 0 5px;
        }
      }
    }
  }
`;

export const Image = styled.img`
  width: 130px !important;
  height: 130px !important;
  background-size: 145px;
  background-position: center;

  &.danielle {
    background-image: url(${Danielle});
  }
  &.eduardo {
    background-image: url(${Eduardo});
  }
  &.fabio {
    background-image: url(${Fabio});
  }
  &.gisleine {
    background-image: url(${Gisleine});
  }
  &.henrique {
    background-image: url(${Henrique});
  }
  &.tamie {
    background-image: url(${Tamie});
  }
  &.gabriel {
    background-image: url(${Gabriel});
  }
  &.juliana {
    background-image: url(${Juliana});
  }
  &.oscar {
    background-image: url(${Oscar});
  }
`;
