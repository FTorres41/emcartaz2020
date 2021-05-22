import React, { useEffect, useState } from "react";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import YouTubeCard from "./components/youtubeCard";
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
import acfApi from "../../services/acfApi";

export default function Home() {
  const [widgets, setWidgets] = useState([]);
  // const [promo, setPromo] = useState({});

  useEffect(() => {
    async function loadSidebar() {
      const { data } = await sidebarApi.get(
        "/wp-rest-api-sidebars/v1/sidebars/sidebar-posts-widget-area"
      );

      setWidgets(data.widgets.filter((x) => x.name === "Banner Upload"));
    }

    // async function hasPromo() {
    //   const { data } = await acfApi.get("/");

    //   if (data) {
    //     data.forEach((dt) => {
    //       if (dt.acf.promo_status !== "Encerrada") {
    //         console.log(dt);
    //         setPromo(dt.id);
    //       }
    //     });
    //   }
    // }

    loadSidebar();
    //hasPromo();
  }, []);

  return (
    <Container>
      <Header />
      <Gallery />
      <LatestNews />
      <Columnists />
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
        <div className="midias-sociais">
          {/* <YouTubeCard /> */}
          <div style={{ width: '380px' }}>
            <Category
              key={12}
              id={12}
              nome={"Infantil"}
              color={(props) => props.theme.lightBlue}
              slug={"infantil"}
            />
          </div>
          <InstagramCard />
          <FacebookCard />
        </div>
      </ModuleContainer>
      <ModuleContainer>
        <WidgetContainer>
          {widgets &&
            widgets.map((widget) => (
              <Widget
                key={widget.id}
                dangerouslySetInnerHTML={{ __html: widget.rendered }}
              />
            ))}
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
      <Footer />
    </Container>
  );
}
