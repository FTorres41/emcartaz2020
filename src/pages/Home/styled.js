import styled from "styled-components";

export const ModuleContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  // justify-content: space-between;
  width: 100%;

  .midias-sociais {
    display: flex;
  }

  @media (max-width: 800px) {
    max-width: 580px;

    .midias-sociais {
      flex-direction: column;
    }
  }

  @media (max-width: 500px) {
    max-width: 365px;
    flex-direction: column;

    .midias-sociais {
      flex-direction: column;
    }
  }
`;

export const WidgetContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;

    img {
      max-width: 450px;
      width: 100%;
      height: auto;
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
