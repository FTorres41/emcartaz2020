import styled from "styled-components";
import { Row } from "react-flexbox-grid";

export const Content = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArticleRow = styled(Row)`
  margin: 20px 0 !important;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 200px;
    margin-right: 20px;
  }

  .info {
    display: flex;
    flex-direction: column;
    max-width: 900px;

    .destaque {
      background-color: ${(props) => props.theme.blue};
      width: fit-content;
      color: ${(props) => props.theme.white};
      padding: 5px;
      font-size: 14px;
      font-weight: 560;
      margin: 3px 0;
    }

    h3 {
      margin: 10px 0;
    }

    .resumo {
      word-wrap: break-word;

      p {
        margin: 10px 0;
        width: 100%;
      }
    }
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
