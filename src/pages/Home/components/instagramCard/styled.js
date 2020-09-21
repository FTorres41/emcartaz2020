import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.width}px;
  margin: 0 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
