import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import api from "../../services/baseApi";
import { Content, PaginationContainer } from "./styled";
import moment from "moment";
import GetImage from "../../util/getImage";
import { Pagination } from "@material-ui/lab";
import NewsCard from "../../components/newsCard";
import { isMobile } from 'react-device-detect';

const PromoPage = () => {
  const history = useHistory();

  const { pagina } = useParams();
  const [promocoes, setPromocoes] = useState([]);
  const [page, setPage] = useState(pagina);
  const [paginas, setPaginas] = useState(1);

  const estilo =   {
    id: 7,
    nome: "Promoções",
    slug: "promo",
    cor: (props) => props.theme.yellow,
  };

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
          titulo: dt.title.rendered.replace('&#8211;', '-').replace("&#8217;", "'")
                                  .replace("&#8220;", '"').replace("&#8221;", '"')
                                  .replace("&#8216;", "'").replace("&#038;", "&"),
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

    async function loadPromocoes() {
      const { data } = await api.get(
        `/promo?page=${page}&per_page=18`
      );

      const itens = await buildItens(data);
      setPromocoes(itens);
    }

    async function getTotals() {
      const { data } = await api.get(`/promo`);

      const totalPag = Math.ceil(data.count / 10);
      setPaginas(totalPag);
    }

    loadPromocoes();
    getTotals();
  }, [page, setPaginas]);

  const size = isMobile ? 160 : 300;

  return (
    <Container>
      <Header cor={estilo ? estilo.cor : undefined}/>
      <Content cor={estilo ? estilo.cor : undefined}>
          {promocoes &&
            promocoes.length > 0 &&
            promocoes.map((promo) => (
                <div className="info">
                  <div className="destaque">{promo.data}</div>
                  <NewsCard
                    key={promo.id}
                    id={promo.id}
                    categoria={0}
                    categoriaSlug={'promo'}
                    titulo={promo.titulo}
                    imagem={promo.imagem}
                    slug={promo.slug}
                    size={size}
                  />
                  <div
                    className="destaque leia-mais"
                    onClick={() => history.push(`/promo/${promo.slug}`)}
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

export default PromoPage;
