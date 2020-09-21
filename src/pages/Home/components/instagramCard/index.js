import React from "react";
import { Container, Content /*, VideoItem*/ } from "./styled";
import SectionTitle from "../../../../components/sectionTitle";
import InstaGrid from "../../../../components/instaGrid";

const InstagramCard = () => {
  const width = window.innerWidth <= 768 ? 560 : 400;
  const qtd = window.innerWidth <= 500 ? 6 : 9;

  return (
    <Container width={width}>
      <SectionTitle value={"Instagram"} color={(props) => props.theme.orange} />
      <Content>
        <InstaGrid account="emcartaz" numberOfMediaElements={qtd} />
      </Content>
    </Container>
  );
};

export default InstagramCard;
