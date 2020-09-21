import React from "react";
import { useHistory } from "react-router-dom";
import { Container, FooterTab } from "./styled";
import { Col } from "react-flexbox-grid";
import { Tabs } from "@material-ui/core";
import Categorias from "../../util/categoriasFooter";

const Footer = ({ cor }) => {
  const history = useHistory();

  return (
    <Container cor={cor}>
      <Col lg={12}>
        <Tabs value={false}>
          {Categorias.map((categoria) =>
            categoria.newWindow ? (
              <a
                rel="noopener noreferrer"
                target="_blank"
                href={categoria.link}
              >
                <FooterTab
                  key={categoria.nome}
                  label={categoria.icone ? categoria.icone : categoria.nome}
                />
              </a>
            ) : (
              <FooterTab
                key={categoria.nome}
                label={categoria.icone ? categoria.icone : categoria.nome}
                onClick={() => history.push(categoria.link)}
              />
            )
          )}
        </Tabs>
      </Col>
    </Container>
  );
};

export default Footer;
