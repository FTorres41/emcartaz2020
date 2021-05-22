import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import SectionTitle from "../../../../components/sectionTitle";
import { Container, Content } from "./styled";
import GetImage from "../../../../util/getImage";
import api from "../../../../services/baseApi";
import NewsCard from "../../../../components/newsCard";

const HomeCategory = ({ id, color, nome, slug }) => {
  const [itens, setItens] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function buildItens(data) {
      let destaques = [];

      for (let i = 0; i < data.length; i++) {
        const dt = data[i];
        const url = await GetImage(dt);

        destaques.push({
          id: dt.id,
          imagem: url,
          titulo: dt.title.rendered.replace('&#8211;', '-').replace("&#8217;", "'")
                                  .replace("&#8220;", '"').replace("&#8221;", '"')
                                  .replace("&#8216;", "'").replace("&#038;", "&"),
          link: dt.link,
          slug: dt.slug,
        });
      }

      return destaques;
    }

    async function loadItens() {
      const { data } = await api.get(`/posts?per_page=4&categories=${id}`);
      const result = await buildItens(data);
      setItens(result);
    }

    loadItens();
  }, [id]);

  return (
    <Container>
      <SectionTitle color={color} value={nome} goTo={() => history.push(`/${slug}/${id}/pagina/1`)}/>
      <Content>
        {itens &&
          itens.length > 0 &&
          itens.map((item) => (
            <NewsCard
              key={item.id}
              id={item.id}
              titulo={item.titulo}
              imagem={item.imagem}
              categoriaSlug={slug}
              slug={item.slug}
              size={175}
            />
          ))}
      </Content>
    </Container>
  );
};

export default HomeCategory;
