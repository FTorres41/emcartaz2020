import styled from "styled-components";
import { Row } from "react-flexbox-grid";

export const Container = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 400px) {
    width: 365px;
    margin: 0;
  }
`;

export const Content = styled(Row)`
  justify-content: space-between;
  margin: 0 !important;
`;
