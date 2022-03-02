import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import SectionTitle from "../../../../components/sectionTitle";
import api from "../../../../services/baseApi";
import TemSereiaNaCozinha from "../../../../assets/tem-sereia-na-cozinha.png";
import Maternagem from "../../../../assets/maternagem-2.png";
import MinhaPlaylist from "../../../../assets/minha-playlist-2.png";
import OnTheRocks from "../../../../assets/on-the-rocks-home.png";
import SetimaArte from "../../../../assets/setima-arte.png";
import TechGeek from "../../../../assets/techgeek.png";
import { Container, ColunaContainer, LogoRow } from "./styled";
import Shuffle from "../../../../util/shuffleArray";
import { isMobile } from 'react-device-detect';

const Columnists = () => {
  const history = useHistory();
  const [colunistas, setColunistas] = useState([]);

  useEffect(() => {
    const buildColunistas = (data) => {
      let result = [];

      data.forEach((element) => {
        let image = undefined;
        switch (element.name) {
          case "Tem Sereia na Cozinha":
            image = TemSereiaNaCozinha;
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

      if (isMobile)
        return Shuffle(result).splice(0, 4);
      else 
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
      <SectionTitle value={"Colunistas"} color={(props) => props.theme.red} goTo={() => history.push(`/colunas`)}/>
      <LogoRow>
        {colunistas &&
          colunistas.length > 0 &&
          colunistas.map((coluna) => (
            <ColunaContainer key={coluna.id}>
              <div onClick={() => history.push(`/${coluna.slug}/${coluna.id}/pagina/1`)}>
                <img src={coluna.logo} alt={coluna.name} />
                <p>{coluna.name}</p>
              </div>
            </ColunaContainer>
          ))}
      </LogoRow>
    </Container>
  );
};

export default Columnists;
