import React, { useState, useEffect } from "react";
import SectionTitle from "../../../../components/sectionTitle";
import { Container, Content } from "./styled";
import GetImage from "../../../../util/getImage";
import api from "../../../../services/baseApi";
import NewsCard from "../../../../components/newsCard";

const HomeCategory = ({ id, color, nome }) => {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    async function buildItens(data) {
      let destaques = [];

      for (let i = 0; i < data.length; i++) {
        const dt = data[i];
        const url = await GetImage(dt);

        destaques.push({
          id: dt.id,
          imagem: url,
          titulo: dt.title.rendered,
          link: dt.link,
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
    <SectionTitle color={color} value={nome} />
    <Content>
        {itens &&
        itens.length > 0 &&
        itens.map((item) => (
            <NewsCard
                key={item.id}
                id={item.id}
                titulo={item.titulo}
                imagem={item.imagem}
                link={item.link}
                size={200}
            />
        ))}
    </Content>
    </Container>
  );
};

export default HomeCategory;
