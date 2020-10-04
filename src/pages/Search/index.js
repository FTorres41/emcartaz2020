import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import api from "../../services/baseApi";
import { Content, PaginationContainer } from "./styled";
import moment from "moment";
import GetImage from "../../util/getImage";
import EstiloCategorias from "../../util/estiloCategorias";
import { Pagination } from "@material-ui/lab";
import NewsCard from "../../components/newsCard";
import { isMobile } from 'react-device-detect';

const SearchPage = () => {
  const history = useHistory();

  const { busca } = useParams();
  const [materias, setMaterias] = useState([]);
  const [page, setPage] = useState(1);
  const [paginas, setPaginas] = useState(1);

  const categorias = EstiloCategorias;

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    async function buildItens(data) {
      let itens = [];

      for (let i = 0; i < data.length; i++) {
        const dt = data[i];
        const itemCategories = dt.categories.filter(x => x !== 2352 && x !== 2351);
        const url = await GetImage(dt);

        itens.push({
          id: dt.id,
          imagem: url,
          titulo: dt.title.rendered.replace('&#8211;', '-').replace("&#038;", "&"),
          data: moment(dt.date).format("DD/MM/YYYY").toString(),
          resumo: {
            __html: dt.excerpt.rendered,
          },
          link: dt.link,
          slug: dt.slug,
          categoria: categorias.filter(x => x.id === parseInt(itemCategories[0]))[0]
        });
      }

      return itens;
    }

    async function loadMaterias() {
      const { data, headers } = await api.get(
        `/posts?page=${page}&per_page=18&search=${busca}`
      );

      const itens = await buildItens(data);
      setMaterias(itens);
      
      setPaginas(parseInt(headers['x-wp-totalpages']))
    }

    loadMaterias();
  }, [busca, categorias, page, setMaterias]);

  const size = isMobile ? 160 : 300;

  return (
    <Container>
      <Header />
      <Content>
          {materias &&
            materias.length > 0 &&
            materias.map((materia) => (
                <div className="info">
                  <div className="destaque">{materia.data}</div>
                  <NewsCard
                    key={materia.id}
                    id={materia.id}
                    categoria={materia.categoria.id}
                    categoriaSlug={materia.categoria.slug}
                    titulo={materia.titulo}
                    imagem={materia.imagem}
                    slug={materia.slug}
                    size={size}
                  />
                  <div
                    className="destaque leia-mais"
                    onClick={() => history.push(`/${materia.categoria.slug}/${materia.slug}`)}
                  >
                    Leia mais
                  </div>
                </div>
            ))}
        <PaginationContainer>
          <Pagination count={paginas} onChange={handleChange} />
        </PaginationContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default SearchPage;
