import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import api from "../../services/baseApi";
import { ArticleRow, Content, PaginationContainer } from "./styled";
import moment from "moment";
import GetImage from "../../util/getImage";
import { Pagination } from "@material-ui/lab";

const CategoryPage = () => {
  const history = useHistory();

  const { id, pagina } = useParams();
  const [materias, setMaterias] = useState([]);
  const [page, setPage] = useState(pagina);
  const [paginas, setPaginas] = useState(1);

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
          titulo: dt.title.rendered,
          data: moment(dt.date).format("DD/MM/YYYY").toString(),
          resumo: {
            __html: dt.excerpt.rendered,
          },
          link: dt.link,
        });
      }

      return itens;
    }

    async function loadMaterias() {
      const { data } = await api.get(
        `/posts?page=${page}&per_page=10&categories=${id}`
      );

      const itens = await buildItens(data);
      setMaterias(itens);
    }

    async function getTotals() {
      const { data } = await api.get(`/categories/${id}`);

      const totalPag = Math.ceil(data.count / 10);
      setPaginas(totalPag);
    }

    loadMaterias();
    getTotals();
  }, [id, page, setMaterias]);

  return (
    <Container>
      <Header />
      <Content>
        <div>
          {materias &&
            materias.length > 0 &&
            materias.map((materia) => (
              <ArticleRow key={materia.id}>
                {materia.imagem ? (
                  <img src={materia.imagem} alt={materia.titulo} />
                ) : (
                  <></>
                )}
                <div className="info">
                  <div className="destaque">{materia.data}</div>
                  <h3>{materia.titulo}</h3>
                  <div
                    className="resumo"
                    dangerouslySetInnerHTML={materia.resumo}
                  />
                  <div
                    className="destaque"
                    onClick={() => history.push(`/materia/${materia.id}`)}
                  >
                    Leia mais
                  </div>
                </div>
              </ArticleRow>
            ))}
        </div>
        <PaginationContainer>
          <Pagination count={paginas} onChange={handleChange} />
        </PaginationContainer>
      </Content>
      <Footer />
    </Container>
  );
};

export default CategoryPage;
