import React from "react";
import { useHistory } from "react-router-dom";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SocialShare from "../../components/socialShare";
import { Article, Content } from "./styled";
import { Col, Row } from "react-flexbox-grid";
import TemSereiaNaCozinha from "../../assets/tem-sereia-na-cozinha.png";
import Maternagem from "../../assets/maternagem-2.png";
import MinhaPlaylist from "../../assets/minha-playlist-2.png";
import OnTheRocks from "../../assets/on-the-rocks-home.png";
import SetimaArte from "../../assets/setima-arte.png";
import TechGeek from "../../assets/techgeek.png";
import SectionTitle from "../../components/sectionTitle";

const AboutColumnsPage = () => {
  const history = useHistory();

  return (
    <Container>
      <Header />
      <Content>
        <Article>
          <div className="categoria">Colunas</div>
          <hr />
          <div className="texto">
            <Row>
              <Col lg={3}>
                <img src={TemSereiaNaCozinha} alt="Tem Sereia na Cozinha" goTo="" />
              </Col>
              <Col lg={9}>
                <SectionTitle
                  value="Tem Sereia na Cozinha"
                  color={(props) => props.theme.midPink}
                  goTo={() => history.push("/tem-sereia-na-cozinha/66114/pagina/1")}
                />
                <p style={{ marginBottom: "15px" }}>
                  O Tem Sereia na Cozinha agora tem uma coluna agora no Em Cartaz. E
                  nós vamos falar sobre gostosuras, lógico! Vamos trocar dicas e
                  receitas que fazem bem pro corpo e pra alma, porque comida
                  também acalanta a alma! Um beijo e um queijo!
                </p>
                <p>
                  Escrito por <strong>Gisleine Moreira</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <img src={Maternagem} alt="Maternagem" />
              </Col>
              <Col lg={9}>
                <SectionTitle
                  value="Maternagem"
                  color={(props) => props.theme.midBlue}
                  goTo={() => history.push("/maternagem/66110/pagina/1")}
                />
                <p style={{ marginBottom: "15px" }}>
                  Maternagem foi criado por Danielle Mei, que além de jornalista
                  é também pedagoga e assumiu também a doce missão de ser a mãe
                  da Maria. A coluna mistura suas três experiências e irá
                  abordar temas relacionados aos cuidados com o bebê. Além, é
                  claro, das mudanças na rotina da família vivenciadas com a
                  chegada d@ bebê. Procuramos tratar dos temas de maneira leve,
                  trazendo dicas úteis e experiências práticas. 
                </p>
                <p>
                  Escrito por <strong>Danielle Mei</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <img src={MinhaPlaylist} alt="Minha Playlist" />
              </Col>
              <Col lg={9}>
                <SectionTitle
                  value="Minha Playlist"
                  color={(props) => props.theme.midGreen}
                  goTo={() => history.push("/minha-playlist/66113/pagina/1")}
                />
                <p style={{ marginBottom: "15px" }}>
                  Nesse espaço quero compartilhar com você um pouco sobre o meu
                  dia a dia, e o que eu venho escutando. Na minha playlist não
                  pode faltar um bom pagode, samba e os modões sertanejos, é
                  claro! Quando falo em cultura POP, aqui será exposto
                  claramente a cultura musical popular brasileira. O que as
                  pessoas escutam no seu dia a dia, o que está em alta, os
                  clássicos, e sim as tops da minha seleção de músicas.
                  Certamente será muito divertido e desafiador para mim, e já
                  para você, espero que seja no mínimo inspirador e renda muitas
                  playlist. Um abraço, e até o próximo texto!
                </p>
                <p>
                  Escrito por <strong>Juliana Antunes</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <img src={OnTheRocks} alt="On The Rocks" />
              </Col>
              <Col lg={9}>
                <SectionTitle
                  value="On The Rocks"
                  color={(props) => props.theme.midRed}
                  goTo={() => history.push("/on-the-rocks/66112/pagina/1")}
                />
                <p style={{ marginBottom: "15px" }}>
                  On the rocks é a sua coluna no Em Cartaz que traz opiniões e
                  também novidades do estilo que nunca vai morrer, o eterno rock
                  n' roll. Se você gosta de rock clássico, hard rock, heavy
                  metal e outras vertentes, não deixe de conferir nossa coluna.
                  Aqui é rock n' roll!
                </p>
                <p>
                  Escrito por <strong>Oscar Colaço</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <img src={SetimaArte} alt="Sétima Arte" />
              </Col>
              <Col lg={9}>
                <SectionTitle
                  value="Sétima Arte"
                  color={(props) => props.theme.midYellow}
                  goTo={() => history.push("/setima-arte/66111/pagina/1")}
                />
                <p style={{ marginBottom: "15px" }}>
                  Tenho certeza que se você está por aqui é porquê é apaixonado
                  por cinema, assim como eu, então veio ao lugar certo. Por aqui
                  você verá tudo relacionado ao mundo da sétima arte. Resenhas,
                  críticas e dicas do que acompanhar nas telonas. Será um prazer
                  trazer por aqui o que há de melhor nas salas de cinema e
                  também, da novidade da moda, o streaming.{" "}
                </p>
                <p>
                  Escrito por <strong>Gabriel Lisboa</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col lg={3}>
                <img src={TechGeek} alt="TechGeek" />
              </Col>
              <Col lg={9}>
                <SectionTitle
                  value="TechGeek"
                  color={(props) => props.theme.darkBlue}
                  goTo={() => history.push("/techgeek/66115/pagina/1")}
                />
                <p style={{ marginBottom: "15px" }}>
                  A coluna TechGeek tem como objetivo aproximar o leitor de
                  diversos assuntos relacionados à tecnologia. Desde os
                  principais lançamentos do mercado até abordar temas que possam
                  parecer complexos ou distantes demais, a intenção é poder
                  descomplicar esse universo tão vasto pouco a pouco.
                </p>
                <p>
                  Escrito por <strong>Fábio Torres</strong>
                </p>
              </Col>
            </Row>
          </div>
        </Article>
        <SocialShare url={window.location.href} title={"Colunas - Em Cartaz"} />
      </Content>
      <Footer />
    </Container>
  );
};

export default AboutColumnsPage;
