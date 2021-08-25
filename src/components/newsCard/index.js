import React from "react";
import { useHistory } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {
  StyledCard as Card,
  StyledActionArea as CardActionArea,
} from "./styled";
import { decodeEntities } from "@wordpress/html-entities";

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

  return (
    <Card id={id} size={size}>
      <a href={`/${categoriaSlug}/${slug}`}>
        <CardActionArea
          size={size}
          onClick={() => history.push(`/${categoriaSlug}/${slug}`)}
        >
          <CardMedia image={imagem} title={decodeEntities(titulo)} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {decodeEntities(titulo)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
};

export default NewsCard;
