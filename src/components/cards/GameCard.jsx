import PropTypes from "prop-types";
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
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/actions/actions";

const MyCard = styled(Card)(({ isDark }) => ({
  height: "400px",
  width: "400px",
  margin: "10px",
  backgroundColor: isDark ? "#262626" : "#ffffff",
  color: isDark ? "#ffffff" : "#000000",
}));

const MyCardMedia = styled(CardMedia)`
  height: 200px;
  width: 100%;
`;

const PriceTypography = styled(Typography)`
  font-weight: bold;
`;

const GameCard = ({
  source,
  name,
  description = "A nice game",
  price,
  stock,
}) => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.darkThemeReducer.darkTheme);

  const handleAddToCart = (name, src, price) => {
    const item = { name, src, price };
    dispatch(addItemToCart(item));
  };

  return (
    <MyCard isDark={isDark}>
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
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={() => handleAddToCart(name, source, price)}
        >
          Add to Cart
        </Button>
        <Button size="small" color="primary" variant="contained">
          View Details
        </Button>
      </CardActions>
    </MyCard>
  );
};

GameCard.propTypes = {
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
};

MyCard.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

export default GameCard;
