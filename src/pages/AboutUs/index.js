import React from "react";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SocialShare from "../../components/socialShare";
import { Article, Content, Image } from "./styled";
import { Col, Row } from "react-flexbox-grid";
import Logo from "../../assets/logo_emcartaz.png";

const AboutUsPage = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Article>
          <div className="categoria">Sobre Nós</div>
          <hr />
          <div className="texto">
            <Row>
              <Col lg={2}>
                <img
                  title="Em Cartaz Logo"
                  src={Logo}
                  alt=""
                  width="204"
                  height="143"
                />
              </Col>
              <Col lg={10} style={{ flexDirection: "column" }}>
                <div>
                  O Em Cartaz inicialmente era apenas um trabalho de faculdade
                  de Tamie Ono Lor e Sheila Gorski para a matéria de
                  Planejamento Estratégico que foi apresentado em 2009. Depois
                  da formatura as meninas se juntaram a outras duas colegas de
                  faculdade, Danielle Mei e Gisleine Moreira, para tirar o
                  projeto do campo acadêmico e levar ele para o mundo real.
                </div>
                <div id="_mcePaste">
                  O site Em Cartaz se tornou realidade em novembro de 2010 e sua
                  primeira grande cobertura foi a Virada Cultural de Curitiba.
                  De lá para cá, a equipe foi crescendo e o site tomando forma e
                  conquistando seu espaço no cenário cultural.
                </div>
                <div>
                  A equipe do Em Cartaz é formada por jornalistas e tem como
                  objetivo levar informação sobre tudo o que acontece na área
                  cultural&nbsp; e gastronômica de Curitiba e região. No site
                  você irá encontrar a informações e cobertura dos principais
                  eventos, críticas de filmes, entrevistas e até informações
                  sobre o mundo gastronômico.
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div style={{ textAlign: "justify", margin: "5px 0" }}>
                  <strong>Acompanhem o Em Cartaz nas redes sociais:</strong>
                </div>
                <ul>
                  <li id="_mcePaste" style={{ textAlign: "justify" }}>
                    Facebook: /
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
          <div className="equipe">
            <div className="categoria">Equipe</div>
            <hr />
            <h4 style={{ marginTop: "10px" }}>Tamie Ono Lor, editora-chefe</h4>
            <Row>
              <Col lg={2}>
                <Image className="tamie" />
              </Col>
              <Col lg={10}>
                <div>
                  Tamie é jornalista e possui especialização em Novas
                  Tecnologias da Comunicação. Ela está sempre querendo absorver
                  um pouco do mundo que a cerca, de preferência com uma câmera
                  na mão. A oriental respira cultura e seu trabalho é também sua
                  diversão.
                  <div className="redes-sociais">
                    <div style={{ textAlign: "justify", flexDirection: "row" }}>
                      <strong>Facebook:</strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/tamieonolor"
                      >
                        {" "}
                        tamieonolor{" "}
                      </a>
                      <strong> Instagram: </strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://instagram.com/miezinha/"
                      >
                        miezinha
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <h4>Danielle Mei, jornalista cultural</h4>
            <Row>
              <Col lg={2}>
                <Image className="danielle" />
              </Col>
              <Col lg={10}>
                <div>
                  Danielle é formada em Jornalismo e mestre em Comunicação. A
                  alemã que ensina inglês gosta mesmo é de ler e ouvir música
                  boa, mas quando precisa escreve sobre diversos estilos
                  culturais.
                  <div className="redes-sociais">
                    <div style={{ textAlign: "justify", flexDirection: "row" }}>
                      <strong>Facebook:</strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/danielle.mei.3"
                      >
                        {" "}
                        danielle.mei.3{" "}
                      </a>
                      <strong> Instagram: </strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://instagram.com/danielle_s_mei/"
                      >
                        danielle_s_mei
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <h4>Gisleine Moreira, editora de gastronomia</h4>
            <Row>
              <Col lg={2}>
                <Image className="gisleine" />
              </Col>
              <Col lg={10}>
                <div>
                  Gisleine é uma jornalista apaixonada por fotografia e
                  gastronomia. Ela que já tem seu projeto pessoal “Gostosuras da
                  Gi” agora irá juntar estes dois mundos num lugar só, afinal
                  cozinhar também é uma arte.
                  <div className="redes-sociais">
                    <div style={{ textAlign: "justify", flexDirection: "row" }}>
                      <strong>Facebook:</strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/gisleine.moreira.7"
                      >
                        {" "}
                        gisleine.moreira.7{" "}
                      </a>
                      <strong> Instagram: </strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://instagram.com/giza_leine"
                      >
                        giza_leine
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <h4>Fábio Torres, cinegrafista, fotógrafo e jornalista</h4>
            <Row>
              <Col lg={2}>
                <Image className="fabio" />
              </Col>
              <Col lg={10}>
                <div>
                  Fábio é formado em jornalismo, especialista em Novas
                  Tecnologias e programador. Sua paixão é o esporte e a
                  tecnologia, mas por conta da convivência se viu cercado pelas
                  artes e se deixou levar pelos acordes musicais diferentes.
                  <div className="redes-sociais">
                    <div style={{ textAlign: "justify", flexDirection: "row" }}>
                      <strong>Facebook:</strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/fabiotorresdequadros"
                      >
                        {" "}
                        fabiotorresdequadros{" "}
                      </a>
                      <strong> Instagram: </strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://instagram.com/fabio_torres"
                      >
                        fabio_torres
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <h4>Henrique Romanine, jornalista cultural</h4>
            <Row>
              <Col lg={2}>
                <Image className="henrique" />
              </Col>
              <Col lg={10}>
                <div>
                  Henrique é jornalista e pretende se especializar em TV, Cinema
                  e Mídias Digitais. Tem paixão em adquirir e absorver
                  conhecimento, e pretende utilizar a profissão para implantar
                  idéias que colaborem para um mundo melhor. Enxerga a cultura
                  como a grande aliada da vida, e não escapa de (quase) nenhum
                  desafio.
                  <div className="redes-sociais">
                    <div style={{ textAlign: "justify", flexDirection: "row" }}>
                      <strong>Facebook:</strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/henriqueromanine"
                      >
                        {" "}
                        henriqueromanine{" "}
                      </a>
                      <strong> Instagram: </strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://instagram.com/hiqueromanine"
                      >
                        hiqueromanine
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <h4>Eduardo Leprevost , jornalista cultural</h4>
            <Row>
              <Col lg={2}>
                <Image className="eduardo" />
              </Col>
              <Col lg={10}>
                <div>
                  Eduardo V. Leprevost, o “Duds”, é jornalista e advogado. Com
                  13 anos de idade descobriu o Heavy Metal e desde então criou
                  interesse não só pelo gênero, mas, também, pelo mundo do Pop e
                  Rock em geral. A música, literatura e o cinema são suas
                  paixões, bem como o universo geek, e sempre que pode participa
                  de encontros e eventos do tema.
                  <div className="redes-sociais">
                    <div style={{ textAlign: "justify", flexDirection: "row" }}>
                      <strong>Facebook:</strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/duds.leprevost"
                      >
                        {" "}
                        duds.leprevost{" "}
                      </a>
                      <strong> Instagram: </strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/duds86/"
                      >
                        duds86
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <h4>Gabriel Lisboa, jornalista e colunista</h4>
            <Row>
              <Col lg={2}>
                <Image className="gabriel" />
              </Col>
              <Col lg={10}>
                <div>
                  <div className="redes-sociais">
                    <div style={{ textAlign: "justify", flexDirection: "row" }}>
                      <strong>Facebook:</strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/gabriel.lisboa.9"
                      >
                        {" "}
                        gabriel.lisboa.9{" "}
                      </a>
                      <strong> Instagram: </strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/gabelisboaa/"
                      >
                        gabelisboaa
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <h4>Juliana Antunes, jornalista cultural</h4>
            <Row>
              <Col lg={2}>
                <Image className="juliana" />
              </Col>
              <Col lg={10}>
                <div>
                  <div className="redes-sociais">
                    <div style={{ textAlign: "justify", flexDirection: "row" }}>
                      <strong>Facebook:</strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/ju.oliveiraantunes"
                      >
                        {" "}
                        ju.oliveiraantunes{" "}
                      </a>
                      <strong> Instagram: </strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/jujuantunes/"
                      >
                        jujuantunes
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <h4>Oscar Colaço, jornalista cultural</h4>
            <Row>
              <Col lg={2}>
                <Image className="oscar" />
              </Col>
              <Col lg={10}>
                <div>
                  <div className="redes-sociais">
                    <div style={{ textAlign: "justify", flexDirection: "row" }}>
                      <strong>Facebook:</strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.facebook.com/oscarariel.colaco"
                      >
                        {" "}
                        oscarariel.colaco{" "}
                      </a>
                      <strong> Instagram: </strong>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href="https://www.instagram.com/arielaces/"
                      >
                        arielaces
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Article>
        <SocialShare url={window.location.href} title={"Sobre Nós - Em Cartaz"} />
      </Content>
      <Footer />
    </Container>
  );
};

export default AboutUsPage;
