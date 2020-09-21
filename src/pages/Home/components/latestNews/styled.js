import styled from "styled-components";
import { Row } from "react-flexbox-grid";

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding-top: 30px;

  @media (max-width: 800px) {
    max-width: 580px;
  }

  @media (max-width: 400px) {
    max-width: 375px;
  }
`;

export const Content = styled(Row)`
  justify-content: space-between;
`;
