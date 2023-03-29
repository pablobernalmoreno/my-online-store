import React, { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GameCard from "../../cards/GameCard";
import { MySection } from "../../cards/CardsContainer";
import { MyMain } from "../main/Main";
import { Typography } from "@material-ui/core";
import { styled } from "@mui/system";

/* Styled Card component
 * @component
 * @param {boolean} isDark Check for the dark/light theme
 * @returns {Component} Styled Card component
 */
const MyTagsPageTypography = styled(Typography)(({ isDark }) => ({
  textAlign: "center",
  color: isDark ? "#ffffff" : "#333333",
}));

/**
 * Tags page detailing all games with said tag
 * @component
 * @returns {Component} Tag page
 */
const TagsPage = () => {
  const isDark = useSelector((state) => state.darkThemeReducer.darkTheme);
  const { gameTag } = useParams();
  const games = useSelector((state) => state.fetchDataReducer);

  const gamesWithTag = useMemo(() => [], []);

  /**
   * Gets all games that have local tag
   * Stores it in a useCallback so it doesnt re render every time
   */
  const getGamesWithTag = useCallback(
    (gameTag) => {
      games?.forEach((game) => {
        game?.tags?.forEach((tag) => {
          gameTag === tag && gamesWithTag.push(game);
        });
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [gameTag, games]
  );

  getGamesWithTag(gameTag);

  return (
    <MyMain isDark={isDark}>
      <MyTagsPageTypography isDark={isDark} variant="h3">
        Games with the {gameTag} tag!
      </MyTagsPageTypography>
      <MySection isDark={isDark}>
        {gamesWithTag?.map((card) => (
          <GameCard
            source={card.image}
            name={card.name}
            description={card.description}
            price={card.price}
            stock={card.inStock}
            id={card.id}
          />
        ))}
      </MySection>
    </MyMain>
  );
};

export default TagsPage;
