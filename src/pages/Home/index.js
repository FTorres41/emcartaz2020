import React from "react";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";
import YouTubeCard from "./components/youtubeCard";
import Gallery from "./components/gallery";
import Columnists from "./components/columnists";
import LatestNews from "./components/latestNews";
import { ModuleContainer } from './styled';
import Categorias from '../../util/categoriasHome';
import Category from './components/category';

export default function Home() {
  return( 
    <Container>
      <Header />
      <Gallery />
      <LatestNews />
      <Columnists />
      <ModuleContainer>
        {Categorias.slice(0, 3).map((categoria) => (
          <Category id={categoria.id} nome={categoria.nome} color={categoria.cor} />
        ))}
      </ModuleContainer>
      <ModuleContainer>
        <YouTubeCard />
      </ModuleContainer>
      <ModuleContainer>
        {Categorias.slice(3, 6).map((categoria) => (
          <Category id={categoria.id} nome={categoria.nome} color={categoria.cor} />
        ))}
      </ModuleContainer>
      <Footer />
    </Container>);
}
