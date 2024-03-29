import styled from "styled-components";

export const Content = styled.div`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;

  @media(max-width: 800px) {
    max-width: 580px;
  }

  @media(max-width: 500px) {
    max-width: 350px;
  }
`;

export const Article = styled.div`
  margin: 20px 0 !important;
  height: 100%;
  width: 100%;

  .categoria {
    background-color: ${(props) => props.cor ? props.cor : props.theme.blue};
    width: fit-content;
    color: ${(props) => props.theme.white};
    padding: 5px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
  }

  hr {
    margin: 0 !important;
    color: ${(props) => props.cor ? props.cor : props.theme.blue};
    border: 2px solid ${(props) => props.cor ? props.cor : props.theme.blue};
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
    max-width: 630px;
    // width: 100%;
    height: auto;
    margin-bottom: 20px;
    border: 0;

    @media(max-width: 800px) {
      max-width: 530px;
    }
  
    @media(max-width: 500px) {
      max-width: 330px;
    }
  }

  p {
    margin-bottom: 10px;
  }

  iframe {
    width: 100%;
  }

  .wp-caption-text {
    font-size: 10px;
    margin-top: -15px;
    margin-bottom: 15px;

    @media(max-width: 800px) {
      font-size: 8px;
    }
  
    @media(max-width: 500px) {
      font-size: 7px;
    }
  }
`;


export const Widget = styled.div`
  display: flex;
  margin-top: 15px;

  li {
    list-style: none;
  }

  .widget-title {
    display: none;
  }
`