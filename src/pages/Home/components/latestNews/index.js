import React, { useState, useEffect } from "react";
import SectionTitle from "../../../../components/sectionTitle";
import NewsCard from "../../../../components/newsCard";
import api from "../../../../services/baseApi";
import GetImage from "../../../../util/getImage";
import { Row } from 'react-flexbox-grid';
import { Container, Content } from "./styled";

const LatestNews = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    async function buildNoticias(data) {
      let news = [];
      for (let i = 0; i < data.length; i++) {
        const dt = data[i];

        var imageUrl = await GetImage(dt);

        news.push({
          id: dt.id,
          titulo: dt.title.rendered,
          imagem: imageUrl,
          link: dt.link,
        });
      }

      return news;
    }

    async function loadNoticias() {
      const { data } = await api.get("/posts?page=1&per_page=8");
      const news = await buildNoticias(data);
      setNoticias(news);
    }

    loadNoticias();
  }, []);

  return (
    <Container>
        <Row>
      <SectionTitle
        value={"Últimas notícias"}
        color={(props) => props ? props.theme.blue : ''}
      />
      </Row>
      <Content>
      {noticias &&
        noticias.length > 0 &&
        noticias.map((noticia) => (
          <NewsCard
            key={noticia.id}
            id={noticia.id}
            titulo={noticia.titulo}
            imagem={noticia.imagem}
            link={noticia.link}
          />
        ))}
      </Content>
    </Container>
  );
};

export default LatestNews;
