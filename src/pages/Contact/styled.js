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
    background-color: ${(props) => props.theme.blue};
    width: fit-content;
    color: ${(props) => props.theme.white};
    padding: 5px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }

  hr {
    margin: 0 !important;
    color: ${(props) => props.theme.blue};
    border: 2px solid ${(props) => props.theme.blue};
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

  .texto {
    .conteudo {
        min-height: 100px;
        align-items: center;
        justify-content: center;
        text-align: justify;
    }
  }

  .row {
    margin: 10px 0 !important;
  }
`;