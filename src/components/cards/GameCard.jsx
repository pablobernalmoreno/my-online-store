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
import { Link } from "react-router-dom";

/**
 * Styled Card component
 * @component
 * @param {boolean} isDark Check for the dark/light theme
 * @returns {Component} Styled Card component
 */
const MyCard = styled(Card)(({ isDark }) => ({
  height: "400px",
  width: "400px",
  margin: "10px",
  backgroundColor: isDark ? "#262626" : "#ffffff",
  color: isDark ? "#ffffff" : "#000000",
}));

/**
 * Styled CardMedia component
 * @component
 * @returns {Component} Styled CardMedia component
 */
const MyCardMedia = styled(CardMedia)`
  height: 200px;
  width: 100%;
`;

/**
 * Styled Typography component
 * @component
 * @returns {Component} Styled Typography component
 */
const PriceTypography = styled(Typography)`
  font-weight: bold;
`;

/**
 * Styled Link component
 * @component
 * @returns {Component} Styled Link component
 */
const MyLink = styled(Link)`
  text-decoration: none;
`;

/**
 * Card that shows the game info
 * @component
 * @param {string} source Link source for the game image, is required
 * @param {string} name  Name of the game, is required
 * @param {string} description Description for the game, optional
 * @param {number} price Price of the game, is required
 * @param {number} stock Quantity of the game in store, is required
 * @param {string} id Id of the game in the DataBase
 * @returns {Component} Game card with all the game info
 */
const GameCard = ({
  source,
  name,
  description = "A nice game",
  price,
  stock,
  id,
}) => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.darkThemeReducer.darkTheme);

  /**
   * Adds items to the cart redux state
   * @param {string} name Name of the game
   * @param {string} src Source image of the game
   * @param {number} price Price of the game
   * Dispatches the addItemToCart action for the global redux cart state
   */
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
        <MyLink to={`game/${id}`}>
          <Button size="small" color="primary" variant="contained">
            View Details
          </Button>
        </MyLink>
      </CardActions>
    </MyCard>
  );
};

MyCard.propTypes = {
  isDark: PropTypes.bool.isRequired,
};

GameCard.propTypes = {
  source: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default GameCard;
