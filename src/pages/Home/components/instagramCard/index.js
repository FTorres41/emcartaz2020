import React from "react";
import { Container, Content /*, VideoItem*/ } from "./styled";
import SectionTitle from "../../../../components/sectionTitle";
import InstaGrid from "../../../../components/instaGrid";

const InstagramCard = () => {
  return (
    <Container>
      <SectionTitle value={"Instagram"} color={(props) => props.theme.orange} />
      <Content>
        <InstaGrid account="emcartaz" numberOfMediaElements={9} />
      </Content>
    </Container>
  );
};

export default InstagramCard;
