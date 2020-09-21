import React from "react";
import { Container, Content } from "./styled";
import SectionTitle from "../../../../components/sectionTitle";

const FacebookCard = () => {
  const width = window.innerWidth > 500 && window.innerWidth <= 768 ? 500 : 360;
  return (
    <Container width={width}>
      <SectionTitle value={"Facebook"} color={(props) => props.theme.purple} />
      <Content>
        <iframe
          title="Facebook Em Cartaz"
          src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Femcartaz.net%2F&tabs=timeline&width=${width}&height=386&small_header=false&adapt_container_width=false&hide_cover=false&show_facepile=true&appId=643707143237497`}
          width={width}
          height="386"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="encrypted-media"
        ></iframe>
      </Content>
    </Container>
  );
};

export default FacebookCard;
