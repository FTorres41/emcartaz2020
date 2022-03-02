import React, { useEffect, useState } from "react";
import api from "../../../../services/baseApi";
import { Container, Content } from "./styled";
import SectionTitle from "../../../../components/sectionTitle";
import { isTablet } from "react-device-detect";
import moment from "moment";
import GetImage from "../../../../util/getImage";
import Typography from "@material-ui/core/Typography";
import { Card, CardActionArea } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const PromoCard = ({ data }) => {
  const [promocoes, setPromocoes] = useState([]);
  const history = useHistory();
  const width = isTablet ? 560 : 360;

  useEffect(() => {
    // async function buildItens(data) {
    //   let itens = [];

    //   for (let i = 0; i < data.length; i++) {
    //     const dt = data[i];
    //     const url = await GetImage(dt);

    //     itens.push({
    //       id: dt.id,
    //       imagem: url,
    //       titulo: dt.title.rendered
    //         .replace("&#8211;", "-")
    //         .replace("&#8217;", "'")
    //         .replace("&#8220;", '"')
    //         .replace("&#8221;", '"')
    //         .replace("&#8216;", "'")
    //         .replace("&#038;", "&"),
    //       data: moment(dt.date).format("DD/MM/YYYY").toString(),
    //       resumo: {
    //         __html: `${dt.excerpt.rendered.slice(3, 253)}...`,
    //       },
    //       link: dt.link,
    //       slug: dt.slug,
    //     });
    //   }

    //   return itens;
    // }

    async function loadPromocoes() {
      if (data && data.length > 0) {
        // const itens = await buildItens(data);
        setPromocoes(data);
      }
    }

    loadPromocoes();
  }, [data]);

  return (
    <Container width={width}>
      <SectionTitle value={"Promoções"} color={(props) => props.theme.yellow} />
      <Content>
        {promocoes &&
          promocoes.length > 0 &&
          promocoes.map((promocao) => (
            <a style={{textDecoration: 'none'}} href={`/promo/${promocao.slug}`}>
              <Card style={{boxShadow: 'none', borderRadius: '0'}}>
                <CardActionArea onClick={() => history.push(`/promo/${promocao.slug}`)}>
                  <div key={promocao.id}>
                    <img
                      src={promocao.imagem}
                      alt={promocao.titulo}
                      style={{ maxWidth: "360px" }}
                    />
                    <Typography gutterBottom variant="h4" component="h3">
                      {promocao.titulo}
                    </Typography>
                    <Typography gutterBottom variant="p" component="h4" style={{textAlign: 'justify'}}>
                      {promocao.resumo.__html}
                    </Typography>
                  </div>
                </CardActionArea>
              </Card>
            </a>
          ))}
      </Content>
    </Container>
  );
};

export default PromoCard;
