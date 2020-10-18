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

const CategoryPage = () => {
  const history = useHistory();

  const { catId, categoria, pagina } = useParams();
  const [materias, setMaterias] = useState([]);
  const [page, setPage] = useState(pagina);
  const [paginas, setPaginas] = useState(1);

  const estilos = EstiloCategorias;
  const estilo = estilos.filter(x => x.id === parseInt(catId))[0];

  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    async function buildItens(data) {
      let itens = [];

      for (let i = 0; i < data.length; i++) {
        const dt = data[i];
        const url = await GetImage(dt);

        itens.push({
          id: dt.id,
          imagem: url,
          titulo: dt.title.rendered.replace('&#8211;', '-').replace("&#8217;", "'").replace("&#038;", "&"),
          data: moment(dt.date).format("DD/MM/YYYY").toString(),
          resumo: {
            __html: dt.excerpt.rendered,
          },
          link: dt.link,
          slug: dt.slug,
        });
      }

      return itens;
    }

    async function loadMaterias() {
      const { data } = await api.get(
        `/posts?page=${page}&per_page=18&categories=${catId}`
      );

      const itens = await buildItens(data);
      setMaterias(itens);
    }

    async function getTotals() {
      const { data } = await api.get(`/categories/${catId}`);

      const totalPag = Math.ceil(data.count / 10);
      setPaginas(totalPag);
    }

    loadMaterias();
    getTotals();
  }, [catId, page, setMaterias, setPaginas]);

  const size = isMobile ? 160 : 300;

  return (
    <Container>
      <Header cor={estilo ? estilo.cor : undefined}/>
      <Content cor={estilo ? estilo.cor : undefined}>
          {materias &&
            materias.length > 0 &&
            materias.map((materia) => (
                <div className="info">
                  <div className="destaque">{materia.data}</div>
                  <NewsCard
                    key={materia.id}
                    id={materia.id}
                    categoria={catId}
                    categoriaSlug={categoria}
                    titulo={materia.titulo}
                    imagem={materia.imagem}
                    slug={materia.slug}
                    size={size}
                  />
                  <div
                    className="destaque leia-mais"
                    onClick={() => history.push(`/${categoria}/${materia.slug}`)}
                  >
                    Leia mais
                  </div>
                </div>
            ))}
        <PaginationContainer>
          <Pagination count={paginas} onChange={handleChange} />
        </PaginationContainer>
      </Content>
      <Footer cor={estilo ? estilo.cor : undefined} />
    </Container>
  );
};

export default CategoryPage;
