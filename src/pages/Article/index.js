import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthorCard from "../../components/authorCard";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import api from "../../services/baseApi";
import sidebarApi from "../../services/sidebarApi";
import { Article, Content, Widget } from "./styled";
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

const ArticlePage = () => {
  const { slug, categoria } = useParams();
  const [materia, setMateria] = useState({});
  const [widgets, setWidgets] = useState([]);
  const [loading, setLoading] = useState(true);
  const estilos = EstiloCategorias;
  const estilo = estilos.filter((x) => x.slug === categoria)[0];

  useEffect(() => {
    async function GetAutor(userId) {
      const response = await api.get(`/users/${userId}`);

      return response.data;
    }

    async function GetCategoria() {
      const response = await api.get(`/categories?slug=${categoria}`);

      return response.data[0].name;
    }

    async function buildItem(data) {
      const url = await GetImage(data);
      const autorData = await GetAutor(data.author);
      const categoriaData = await GetCategoria();

      return {
        id: data.id,
        imagem: url,
        titulo: decodeEntities(data.title.rendered),
        autor: autorData,
        categoria: categoriaData,
        data: moment(data.date).format("DD/MM/YYYY").toString(),
        conteudo: {
          __html: data.content.rendered,
        },
        link: data.link,
        slug: slug,
      };
    }

    async function loadMateria() {
      const { data } = await api.get(`/posts/?slug=${slug}`);

      setMateria(await buildItem(data[0]));

      setLoading(false);
      
      window.instgrm.Embeds.process();
    }

    async function loadSidebar() {
      const { data } = await sidebarApi.get(
        "/wp-rest-api-sidebars/v1/sidebars/sidebar-posts-widget-area"
      );

      setWidgets(data.widgets.filter((x) => x.name === "Banner Upload"));
    }

    loadMateria();
    loadSidebar();
  }, [categoria, slug]);

  return (
    <Container>
      <Header cor={estilo ? estilo.cor : undefined} />
      <Content>
        {!loading && materia ? (
          <Row>
            <Col lg={8} sm={12}>
              <Article cor={estilo ? estilo.cor : undefined}>
                <div className="categoria">{materia.categoria}</div>
                <hr />
                <span className="autor">
                  {materia.data} / Por {materia.autor.name}
                </span>
                <h1>{materia.titulo}</h1>
                <div dangerouslySetInnerHTML={materia.conteudo} />
                <SSContainer>
                  <p>Compartilhe com seus amigos! </p>
                  <EmailShareButton
                    url={window.location.href}
                    subject={materia.titulo}
                  >
                    <AiOutlineMail color={"#DC4C3F"} size={"1.5em"} />
                  </EmailShareButton>
                  <FacebookShareButton
                    url={window.location.href}
                    quote={materia.titulo}
                  >
                    <AiFillFacebook color={"#036CE4"} size={"1.5em"} />
                  </FacebookShareButton>
                  <LinkedinShareButton
                    url={window.location.href}
                    title={materia.titulo}
                  >
                    <AiFillLinkedin color={"#283E4A"} size={"1.5em"} />
                  </LinkedinShareButton>
                  <TelegramShareButton
                    url={window.location.href}
                    title={materia.titulo}
                  >
                    <FaTelegram color={"#2FA4D7"} size={"1.5em"} />
                  </TelegramShareButton>
                  <TwitterShareButton
                    url={window.location.href}
                    title={materia.titulo}
                    via={"@EmCartaz_"}
                  >
                    <AiFillTwitterSquare color={"#1A91DA"} size={"1.5em"} />
                  </TwitterShareButton>
                  <WhatsappShareButton
                    url={window.location.href}
                    title={materia.titulo}
                  >
                    <FaWhatsappSquare color={"#25CB63"} size={"1.5em"} />
                  </WhatsappShareButton>
                </SSContainer>
                <AuthorCard
                  data={materia.autor}
                  cor={estilo ? estilo.cor : undefined}
                />
              </Article>
            </Col>
            <Col lg={4} style={{ marginTop: "30px" }}>
              {widgets &&
                widgets.map((widget) => (
                  <Widget
                    key={widget.id}
                    dangerouslySetInnerHTML={{ __html: widget.rendered }}
                  />
                ))}
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

export default ArticlePage;
