import React from "react";
import { Card, Container, Content } from "./styled";
import SectionTitle from "../../../../components/sectionTitle";
import { isTablet } from 'react-device-detect';

const InstagramCard = () => {
  const width = isTablet ? 560 : 360;

  return (
    <Container width={width}>
      <SectionTitle value={"Instagram"} color={(props) => props.theme.orange} />
      <Content>
        <a href="http://instagram.com/emcartaz" alt="Siga o @emcartaz no Instagram" target="_blank" rel="noopener noreferrer">
          <Card width={width}/>
        </a>
      </Content>
    </Container>
  );
};

export default InstagramCard;
