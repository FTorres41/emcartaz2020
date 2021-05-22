import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  StyledCard as Card,
  StyledActionArea as CardActionArea,
} from "./styled";
import acfApi from "../../services/acfApi";

const NewsCard = ({
  id,
  titulo,
  imagem,
  categoria,
  categoriaSlug,
  size,
  slug,
}) => {
  const history = useHistory();
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function getPromoStatus() {
      const { data } = await acfApi.get(`promo/${id}/promo_status`);

      setStatus(data);
    }

    getPromoStatus();
  }, [id]);

  return (
    <Card id={id} size={size}>
      <CardActionArea
        size={size}
        onClick={() => history.push(`/${categoriaSlug}/${slug}`)}
      >
        <p>{status}</p>
        <CardMedia image={imagem} title={titulo} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {titulo}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
