import styled from "styled-components";

export const ModuleContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .midias-sociais {
    display: flex;
  }

  @media (max-width: 800px) {
    max-width: 580px;

    .midias-sociais {
      flex-direction: column;
    }
  }

  @media (max-width: 400px) {
    max-width: 365px;
    flex-direction: column;

    .midias-sociais {
      flex-direction: column;
    }
  }
`;
