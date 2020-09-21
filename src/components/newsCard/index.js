import React from 'react';
import { useHistory } from "react-router-dom";
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { StyledCard as Card, StyledActionArea as CardActionArea } from './styled';

const NewsCard = ({ id, titulo, imagem, categoria, size}) => {
  const history = useHistory();

  // if (!size) 
  //   size = 280;

  return (
    <Card id={id} size={size}>
      <CardActionArea size={size} onClick={() => history.push(`/categoria/${categoria}/materia/${id}`)}>
        <CardMedia
          image={imagem}
          title={titulo}
        />
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