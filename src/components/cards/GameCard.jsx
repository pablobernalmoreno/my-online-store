import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { styled } from "@mui/system";
import React from "react";

const MyCard = styled(Card)`
  height: 400px;
  width: 350px;
  margin: 10px;
`;

const MyCardMedia = styled(CardMedia)`
  height: 200px;
  width: 100%;
`;

const PriceTypography = styled(Typography)`
  font-weight: bold;
`;

const GameCard = ({ source, name, description, price, stock }) => {
  return (
    <MyCard>
      <CardActionArea>
        <MyCardMedia
          component="img"
          alt={name}
          height="140"
          image={source}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
          <PriceTypography variant="body1" component="p">
            $ {price}
          </PriceTypography>
          <Typography variant="body2" component="p">
            Currently in stock: {stock}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary">
          View Details
        </Button>
      </CardActions>
    </MyCard>
  );
};

export default GameCard;
