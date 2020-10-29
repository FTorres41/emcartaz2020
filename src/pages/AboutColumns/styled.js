import styled from "styled-components";

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

  img {
    vertical-align: middle;
    height: auto;
    max-width: 200px;
    max-height: 200px;
    border: 1px solid lightgray;
    border-radius: 100px;  }

  .texto {
    p {
      display: inline-block;
      text-align: justify;
    }
  }
  .row {
    margin: 10px 0 !important;
    align-items: center;

    .col-lg-9 {
      div {
        padding-top: 0 !important;
        padding-bottom 5px;
        margin-bottom: 10px;

        h2 {
          margin: 0 !important;
        }
      }
    }
  }
`;