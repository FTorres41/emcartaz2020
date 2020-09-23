import styled from "styled-components";

export const GalleryContainer = styled.div`
  .awssld__wrapper {
    height: 600px;
    max-width: 1140px;
    margin: 0 auto;
  }

  @media(max-width: 800px) {
    .awssld__wrapper {
      height: 420px;
      max-width: 768px;
      margin: 0 auto;
    }
  }

  @media(max-width: 400px) {
    .awssld__wrapper {
      height: 210px;
      max-width: 375px;
      margin: 0 auto;
    }
  }

  .awssld__content {
    background-color: ${(props) => props.theme.white} !important;

    .destaque-item {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      cursor: pointer;

      img {
        max-width: 1140px;
        width: 100%;
      }

      .destaque-link {
        background-color: black;
        width: 100%;
        opacity: 0.8;
        top: 520px;
        position: absolute;
        height: 90px;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        cursor: pointer;

        div {
          font-size: 36px;
          display: flex;
          color: ${(props) => props.theme.white};
          text-decoration: none;
          margin: 20px;
        }
      }
    }
  }

  .awssld__bullets button {
    width: 10px !important;
    height: 10px !important;
  }
`;
