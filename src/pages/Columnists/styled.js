import styled from "styled-components";
import { Row } from "react-flexbox-grid";

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;

  @media(max-width: 800px) {
    max-width: 580px;
  }

  @media (max-width: 500px) {
    width: 365px;
    margin: 0 auto;

    .info {
        max-width: 160px !important;
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    max-width: 300px;
    width: 100%;

    .destaque {
      background-color: ${(props) => props.cor ? props.cor : props.theme.blue};
      width: fit-content;
      color: ${(props) => props.theme.white};
      padding: 5px;
      font-size: 14px;
      font-weight: 560;
      margin: 0;
    }

    .leia-mais {
      cursor: pointer;
      align-self: flex-end;
    }

    .MuiCard-root{
      margin: 0 !important;
      border-radius: 0 !important;
      cursor: pointer;
    }
  }
`;

export const ColunaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 180px;
  cursor: pointer;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    font-size: 18px;
  }

  img {
    margin: 10px;
    border: 2px solid ${(props) => props.theme.gray};
    border-radius: 90px;
    max-width: 160px;
    max-height: 160px;
  }

  p {
    font-weight: 600;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    text-align: center;
  }
`;

export const LogoRow = styled(Row)`
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto !important;
`;

export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ColunasContent = styled(Row)`
    justify-content: space-between;
    margin: 0 auto !important;
    max-width: 980px;
    padding: 15px 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;

    @media(max-width: 800px) {
      max-width: 615px;
    }

    @media(max-width: 500px) {
      max-width: 360px;
    }

    .info {
      display: flex;
      flex-direction: column;
      margin: 10px 0;
  
      .destaque {
        background-color: ${(props) => props.cor ? props.cor : props.theme.blue};
        width: fit-content;
        color: ${(props) => props.theme.white};
        padding: 5px;
        font-size: 14px;
        font-weight: 560;
        margin: 0;
      }

      .leia-mais {
        cursor: pointer;
        align-self: flex-end;
      }

      .MuiCard-root{
        margin: 0 !important;
        border-radius: 0 !important;
        cursor: pointer;
      }
    }
`