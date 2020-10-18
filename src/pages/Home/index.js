import React, {useEffect, useState} from "react";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import YouTubeCard from "./components/youtubeCard";
import InstagramCard from "./components/instagramCard";
import FacebookCard from "./components/facebookCard";
import Gallery from "./components/gallery";
import Columnists from "./components/columnists";
import LatestNews from "./components/latestNews";
import { ModuleContainer, Widget, WidgetContainer } from "./styled";
import Categorias from "../../util/categoriasHome";
import Category from "./components/category";
import sidebarApi from '../../services/sidebarApi';

export default function Home() {
  const [widgets, setWidgets] = useState([]);

  useEffect(() => {
    async function loadSidebar() {
      const { data } = await sidebarApi.get(
        "/wp-rest-api-sidebars/v1/sidebars/sidebar-posts-widget-area"
      );

      setWidgets(data.widgets.filter((x) => x.name === "Banner Upload"));
    }

    loadSidebar();
  }, [])

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
          <YouTubeCard />
          <InstagramCard />
          <FacebookCard />
        </div>
      </ModuleContainer>
      <ModuleContainer>
        <WidgetContainer>
          { widgets && widgets.map((widget) => (<Widget key={widget.id} dangerouslySetInnerHTML={{ __html: widget.rendered }} />))}
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
