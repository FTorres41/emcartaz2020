import React from "react";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SocialShare from "../../components/socialShare";
import ContactForm from "../../components/contactForm";
import { Article, Content } from "./styled";
import { Col, Row } from "react-flexbox-grid";

const ContactPage = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Article>
          <div className="categoria">Contato</div>
          <hr />
          <div className="texto">
            <Row className="conteudo">
              <Col lg={12}>
                Sugestões de pauta, dúvidas, críticas, sugestões? Entre em
                contato através do formulário abaixo ou se preferir envie sua
                mensagem para o nosso email <strong>emcartaz@emcartaz.net</strong>
              </Col>
              <Col lg={12}>
                Se quiser anunciar no Em Cartaz é só enviar a proposta por
                e-mail para <strong>comercial@emcartaz.net</strong>
              </Col>
            </Row>
            <Row>
              <ContactForm />
            </Row>
            <Row style={{marginTop: "10px"}}>
              <Col lg={12}>
                Ou, se preferir, nos mande uma mensagem em alguma de nossas redes sociais:
                <ul>
                  <li id="_mcePaste" style={{ textAlign: "justify" }}>
                    Facebook: 
                    <a
                      href="http://facebook.com/emcartaz.net"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      emcartaz.net
                    </a>
                  </li>
                  <li id="_mcePaste" style={{ textAlign: "justify" }}>
                    Twitter:{" "}
                    <a
                      href="https://twitter.com/emcartaz_"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      @emcartaz_
                    </a>
                  </li>
                  <li id="_mcePaste" style={{ textAlign: "justify" }}>
                    Instagram:{" "}
                    <a
                      href="http://instagram.com/emcartaz"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      emcartaz
                    </a>
                  </li>
                  <li id="_mcePaste" style={{ textAlign: "justify" }}>
                    YouTube:{" "}
                    <a
                      href="https://www.youtube.com/channel/UCEiuMdaIdiKhlJe9NFygVUw"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Tv Em Cartaz
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </Article>
        <SocialShare url={window.location.href} title={"Contato - Em Cartaz"} />
      </Content>
      <Footer />
    </Container>
  );
};

export default ContactPage;
