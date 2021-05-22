import React from "react";
import { Card, Container, Content } from "./styled";
import SectionTitle from "../../../../components/sectionTitle";
// import InstaGrid from "../../../../components/instaGrid";
import { isMobile } from 'react-device-detect';

const InstagramCard = () => {
  const width = isMobile ? 560 : 360;
  // const qtd = isMobile ? 6 : 9;

  return (
    <Container width={width}>
      <SectionTitle value={"Instagram"} color={(props) => props.theme.orange} />
      <Content>
        <a href="http://instagram.com/emcartaz" alt="Siga o @emcartaz no Instagram" target="_blank" rel="noopener noreferrer">
          <Card width={width}/>
        </a>
        {/* <InstaGrid account="emcartaz" numberOfMediaElements={qtd} /> */}
      </Content>
    </Container>
  );
};

export default InstagramCard;
