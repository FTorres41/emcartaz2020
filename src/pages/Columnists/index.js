import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SectionTitle from "../../components/sectionTitle";
import api from "../../services/baseApi";
import GostosurasDaGi from "../../assets/gostosuras-da-gi.png";
import Maternagem from "../../assets/maternagem-2.png";
import MinhaPlaylist from "../../assets/minha-playlist-2.png";
import OnTheRocks from "../../assets/on-the-rocks-home.png";
import SetimaArte from "../../assets/setima-arte.png";
import TechGeek from "../../assets/techgeek.png";
import {
  Container,
  ColunaContainer,
  ColunasContent,
  LogoRow,
  PaginationContainer,
} from "./styled";
import Shuffle from "../../util/shuffleArray";
import { isMobile } from "react-device-detect";
import Header from "../../components/header";
import Footer from "../../components/footer";
import PageContainer from "../../components/pageContainer";
import moment from "moment";
import GetImage from "../../util/getImage";
import NewsCard from "../../components/newsCard";
import { Pagination } from "@material-ui/lab";
import EstiloCategorias from "../../util/estiloCategorias";


const ColumnistsPage = () => {
  const history = useHistory();
  const [colunistas, setColunistas] = useState([]);
  const [materias, setMaterias] = useState([]);
  const [page, setPage] = useState(1);
  const [paginas, setPaginas] = useState(1);
  const categoria = "colunas";
  const size = isMobile ? 160 : 300;
  const categorias = EstiloCategorias;

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
          categoria: categorias.filter(x => x.id === dt.categories[0])[0]
        });
      }

      return itens;
    }

    async function getTotals() {
      const { data } = await api.get(`/categories/36005`);

      const totalPag = Math.ceil(data.count / 10);
      setPaginas(totalPag);
    }

    const buildColunistas = (data) => {
      let result = [];

      data.forEach((element) => {
        let image = undefined;
        switch (element.name) {
          case "Gostosuras da Gi":
            image = GostosurasDaGi;
            break;
          case "Maternagem":
            image = Maternagem;
            break;
          case "Minha Playlist":
            image = MinhaPlaylist;
            break;
          case "On The Rocks":
            image = OnTheRocks;
            break;
          case "Sétima Arte":
            image = SetimaArte;
            break;
          case "TechGeek":
            image = TechGeek;
            break;
          default:
            break;
        }

        result.push({
          id: element.id,
          name: element.name,
          logo: image,
          link: element.link,
          slug: element.slug,
        });
      });

      return Shuffle(result);
    };

    async function loadColunistas() {
      const { data } = await api.get("/categories?parent=36005");

      const colunistasData = buildColunistas(data);

      setColunistas(colunistasData);
    }

    async function loadMaterias() {
      const { data } = await api.get(
        `/posts?page=${page}&per_page=18&categories=66110,66111,66112,66113,66114,66115`
      );

      const itens = await buildItens(data);
      setMaterias(itens);
    }

    loadColunistas();
    loadMaterias();
    getTotals();
  }, [categorias, page, setColunistas]);

  return (
    <PageContainer>
      <Header cor={(props) => props.theme.blue} />
      <Container cor={(props) => props.theme.blue}>
        <SectionTitle value={"Colunistas"} color={(props) => props.theme.blue} />
        <LogoRow>
          {colunistas &&
            colunistas.length > 0 &&
            colunistas.map((coluna) => (
              <ColunaContainer key={coluna.id}>
                <div
                  onClick={() =>
                    history.push(`/${coluna.slug}/${coluna.id}/pagina/1`)
                  }
                >
                  <img src={coluna.logo} alt={coluna.name} />
                  <p>{coluna.name}</p>
                </div>
              </ColunaContainer>
            ))}
        </LogoRow>
        <SectionTitle
          value={"Colunas mais recentes"}
          color={(props) => props.theme.blue}
        />
        <ColunasContent>
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
                onClick={() => history.push(`/${categoria}/${materia.slug}`)}
              >
                Leia mais
              </div>
            </div>
          ))}
        </ColunasContent>
      </Container>
      <PaginationContainer>
        <Pagination count={paginas} onChange={handleChange} />
      </PaginationContainer>
      <Footer cor={(props) => props.theme.blue} />
    </PageContainer>
  );
};

export default ColumnistsPage;
