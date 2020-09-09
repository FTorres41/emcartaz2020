import React from "react";
import { useParams } from "react-router-dom";
import Container from "../../components/pageContainer";
import Header from "../../components/header";
import Footer from "../../components/footer";

const CategoryPage = () => {
  const { id } = useParams();

  return (
    <Container>
      <Header />
      <div>Categoria {id}</div>
      <Footer />
    </Container>
  );
};

export default CategoryPage;
