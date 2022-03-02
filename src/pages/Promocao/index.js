import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import api from "../../services/baseApi";
import { Article, Content } from "./styled";
import moment from "moment";
import GetImage from "../../util/getImage";
import EstiloCategorias from "../../util/estiloCategorias";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Container as SSContainer } from "../../components/socialShare/styled";
import {
  AiFillFacebook,
  AiOutlineMail,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaTelegram, FaWhatsappSquare } from "react-icons/fa";
import { Row, Col } from "react-flexbox-grid";
import { decodeEntities } from "@wordpress/html-entities";

const PromocaoPage = () => {
  const { promoId } = useParams();
  const [promocao, setPromocao] = useState({});
  const [loading, setLoading] = useState(true);
  const estilos = EstiloCategorias;
  const estilo = estilos.filter((x) => x.slug === 'promocoes')[0];

  useEffect(() => {
    async function buildItem(data) {
      const url = await GetImage(data);

      return {
        id: data.id,
        imagem: url,
        titulo: decodeEntities(data.title.rendered),
        data: moment(data.date).format("DD/MM/YYYY").toString(),
        conteudo: {
          __html: data.content.rendered,
        },
        link: data.link,
        // slug: slug,
      };
    }

    async function loadPromocao() {
      const { data } = await api.get(`/promo?id=${promoId}`);

      setPromocao(await buildItem(data[0]));

      setLoading(false);
      
      window.instgrm.Embeds.process();
    }

    loadPromocao();
  }, [promoId]);

  return (
    <Container>
      <Header cor={estilo ? estilo.cor : undefined} />
      <Content>
        {!loading && promocao ? (
          <Row>
            <Col lgOffset={1} lg={9} sm={12}>
              <Article cor={estilo ? estilo.cor : undefined}>
                <div className="categoria">Promoções</div>
                <hr />
                <h1>{promocao.titulo}</h1>
                <div dangerouslySetInnerHTML={promocao.conteudo} />
                <SSContainer>
                  <p>Compartilhe com seus amigos! </p>
                  <EmailShareButton
                    url={window.location.href}
                    subject={promocao.titulo}
                  >
                    <AiOutlineMail color={"#DC4C3F"} size={"1.5em"} />
                  </EmailShareButton>
                  <FacebookShareButton
                    url={window.location.href}
                    quote={promocao.titulo}
                  >
                    <AiFillFacebook color={"#036CE4"} size={"1.5em"} />
                  </FacebookShareButton>
                  <LinkedinShareButton
                    url={window.location.href}
                    title={promocao.titulo}
                  >
                    <AiFillLinkedin color={"#283E4A"} size={"1.5em"} />
                  </LinkedinShareButton>
                  <TelegramShareButton
                    url={window.location.href}
                    title={promocao.titulo}
                  >
                    <FaTelegram color={"#2FA4D7"} size={"1.5em"} />
                  </TelegramShareButton>
                  <TwitterShareButton
                    url={window.location.href}
                    title={promocao.titulo}
                    via={"@EmCartaz_"}
                  >
                    <AiFillTwitterSquare color={"#1A91DA"} size={"1.5em"} />
                  </TwitterShareButton>
                  <WhatsappShareButton
                    url={window.location.href}
                    title={promocao.titulo}
                  >
                    <FaWhatsappSquare color={"#25CB63"} size={"1.5em"} />
                  </WhatsappShareButton>
                </SSContainer>
              </Article>
            </Col>
          </Row>
        ) : (
          <></>
        )}
      </Content>
      <Footer cor={estilo ? estilo.cor : undefined} />
    </Container>
  );
};

export default PromocaoPage;
