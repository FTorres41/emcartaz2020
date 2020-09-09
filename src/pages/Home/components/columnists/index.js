import React, { useEffect, useState } from "react";
import SectionTitle from "../../../../components/sectionTitle";
import api from "../../../../services/baseApi";
import GostosurasDaGi from "../../../../assets/gostosuras-da-gi.png";
import Maternagem from "../../../../assets/maternagem-2.png";
import MinhaPlaylist from "../../../../assets/minha-playlist-2.png";
import OnTheRocks from "../../../../assets/on-the-rocks-home.png";
import SetimaArte from "../../../../assets/setima-arte.png";
import TechGeek from "../../../../assets/techgeek.png";
import { Row } from "react-flexbox-grid";
import { Container, ColunaContainer, LogoRow } from "./styled";
import Shuffle from "../../../../util/shuffleArray";

const Columnists = () => {
  const [colunistas, setColunistas] = useState([]);

  useEffect(() => {
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
        });
      });

      return Shuffle(result);
    };

    async function loadColunistas() {
      const { data } = await api.get("/categories?parent=36005");

      const colunistasData = buildColunistas(data);

      setColunistas(colunistasData);
    }

    loadColunistas();
  }, [setColunistas]);

  return (
    <Container>
      <SectionTitle value={"Colunistas"} color={(props) => props.theme.red} />
      <LogoRow>
        {colunistas &&
          colunistas.length > 0 &&
          colunistas.map((coluna) => (
            <ColunaContainer key={coluna.id}>
              <a href={coluna.link}>
                <img src={coluna.logo} alt={coluna.name} />
                <p>{coluna.name}</p>
              </a>
            </ColunaContainer>
          ))}
      </LogoRow>
    </Container>
  );
};

export default Columnists;
