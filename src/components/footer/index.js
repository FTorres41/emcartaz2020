import React from "react";
import { Container, FooterTab } from "./styled";
import { Col } from "react-flexbox-grid";
import { Tabs } from "@material-ui/core";
import Categorias from "../../util/categoriasFooter";

const Footer = () => {
  return (
    <Container>
      <Col lg={12}>
        <Tabs value={false}>
          {Categorias.map((categoria) => (
            <FooterTab
              key={categoria.nome}
              label={categoria.icone ? categoria.icone : categoria.nome}
              onClick={() => console.log(categoria.link)}
            />
          ))}
        </Tabs>
      </Col>
    </Container>
  );
};

export default Footer;
