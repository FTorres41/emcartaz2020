import React, { useEffect, useState } from "react";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import InstagramCard from "./components/instagramCard";
import FacebookCard from "./components/facebookCard";
import Gallery from "./components/gallery";
import Columnists from "./components/columnists";
import LatestNews from "./components/latestNews";
import PromoCard from "./components/promoCard";
import { ModuleContainer, Widget, WidgetContainer } from "./styled";
import Categorias from "../../util/categoriasHome";
import Category from "./components/category";
import sidebarApi from "../../services/sidebarApi";
import api from "../../services/baseApi";
import moment from "moment";
import GetImage from "../../util/getImage";
import EncodeString from "../../util/encodeString";
import EstiloCategorias from "../../util/estiloCategorias";

export default function Home() {
  const [widgets, setWidgets] = useState([]);
  const [promocoes, setPromocoes] = useState([]);
  const [featured, setFeatured] = useState({});

  useEffect(() => {
    async function buildItens(data) {
      let itens = [];

      for (let i = 0; i < data.length; i++) {
        const dt = data[i];
        const url = await GetImage(dt);

        itens.push({
          id: dt.id,
          imagem: url,
          titulo: EncodeString(dt.title.rendered),
          data: moment(dt.date).format("DD/MM/YYYY").toString(),
          resumo: { __html: `${dt.excerpt.rendered.slice(3, 253)}...` },
          link: dt.link,
          slug: dt.slug,
        });
      }

      return itens;
    }

    async function getPromo() {
      const { data } = await api.get(`/promo?page=1&per_page=1`);
      const openPromo = data.filter((d) => d.acf.promo_status !== "Encerrada");
      if (openPromo && openPromo.length > 0) {
        const itens = await buildItens(openPromo);
        setPromocoes(itens);
      }
    }

    async function loadBanners() {
      const { data } = await sidebarApi.get(
        "/wp-rest-api-sidebars/v1/sidebars/sidebar-posts-widget-area"
      );

      setWidgets(data.widgets.filter((x) => x.name === "Banner Upload"));
    }

    async function getFeaturedCategory() {
      const { data } = await api.get("/categories?per_page=50");
      setFeatured(data.filter((x) => x.acf.destaque)[0]);
    }

    loadBanners();
    getPromo();
    getFeaturedCategory();
  }, []);

  return (
    <Container>
      <Header />
      <Gallery />
      <LatestNews />
      <Columnists />
      <ModuleContainer>
        <WidgetContainer>
          {widgets && widgets[0] && (
            <Widget
              key={widgets[0].id}
              dangerouslySetInnerHTML={{ __html: widgets[0].rendered }}
            />
          )}
        </WidgetContainer>
      </ModuleContainer>
      <ModuleContainer>
        {Categorias.slice(0, 3).map((categoria) => (
          <Category
            key={categoria.id}
            id={categoria.id}
            nome={categoria.nome}
            color={categoria.cor}
            slug={categoria.slug}
          />
        ))}
      </ModuleContainer>
      <ModuleContainer>
        <WidgetContainer>
          {widgets && widgets[1] && (
            <Widget
              key={widgets[1].id}
              dangerouslySetInnerHTML={{ __html: widgets[1].rendered }}
            />
          )}
        </WidgetContainer>
      </ModuleContainer>
      <ModuleContainer>
        <div className="midias-sociais">
          <div style={{ width: "380px" }}>
            {promocoes && promocoes[0] ? (
              <PromoCard data={promocoes} />
            ) : featured && featured.id ? (
              <Category
                key={featured.id}
                id={featured.id}
                nome={featured.name}
                color={
                  EstiloCategorias.filter((c) => c.id === featured.id)[0].cor
                }
                slug={featured.slug}
              />
            ) : (
              <div />
            )}
          </div>
          <InstagramCard />
          <FacebookCard />
        </div>
      </ModuleContainer>
      <ModuleContainer>
        <WidgetContainer>
          {widgets && widgets[2] && (
            <Widget
              key={widgets[2].id}
              dangerouslySetInnerHTML={{ __html: widgets[2].rendered }}
            />
          )}
        </WidgetContainer>
      </ModuleContainer>
      <ModuleContainer>
        {Categorias.slice(3, 6).map((categoria) => (
          <Category
            key={categoria.id}
            id={categoria.id}
            nome={categoria.nome}
            color={categoria.cor}
            slug={categoria.slug}
          />
        ))}
      </ModuleContainer>
      <ModuleContainer>
        <WidgetContainer>
          {widgets && widgets[3] && (
            <Widget
              key={widgets[3].id}
              dangerouslySetInnerHTML={{ __html: widgets[3].rendered }}
            />
          )}
        </WidgetContainer>
      </ModuleContainer>
      <Footer />
    </Container>
  );
}
