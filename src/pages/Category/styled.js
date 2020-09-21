import styled from "styled-components";
import { Row } from "react-flexbox-grid";

export const Content = styled(Row)`
    justify-content: space-between;
    margin: 0 auto !important;
    max-width: 980px;
    padding: 15px 0;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;

    @media(max-width: 800px) {
      max-width: 615px;
    }

    @media(max-width: 400px) {
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

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
