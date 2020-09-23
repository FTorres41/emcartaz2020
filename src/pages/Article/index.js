import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AuthorCard from "../../components/authorCard";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import api from "../../services/baseApi";
import { Article, Content } from "./styled";
import moment from "moment";
import GetImage from "../../util/getImage";
import EstiloCategorias from "../../util/estiloCategorias";

const ArticlePage = () => {
  const { slug, categoria } = useParams();
  const [materia, setMateria] = useState({});
  const [loading, setLoading] = useState(true);

  const estilos = EstiloCategorias;
  const estilo = estilos.filter(x => x.slug === categoria)[0];

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
        titulo: data.title.rendered,
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
    }

    loadMateria();
  }, [setMateria, setLoading, categoria, slug]);

  return (
    <Container>
      <Header cor={estilo ? estilo.cor : undefined} />
      <Content>
        {!loading && materia ? (
          <Article cor={estilo ? estilo.cor : undefined} >
            <div className="categoria">{materia.categoria}</div>
            <hr />
            <span className="autor">
              {materia.data} / Por {materia.autor.name}
            </span>
            <h1>{materia.titulo}</h1>
            <div dangerouslySetInnerHTML={materia.conteudo} />
            <AuthorCard data={materia.autor} cor={estilo ? estilo.cor : undefined} />
          </Article>
        ) : (
          <></>
        )}
      </Content>
      <Footer cor={estilo ? estilo.cor : undefined} />
    </Container>
  );
};

export default ArticlePage;
