import React from "react";
import { Typography, Grid, Chip } from "@material-ui/core";
import { MyMain } from "../main/Main";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchGameById } from "../../../utils/pocketbase/pocketBaseUtils";
import styled from "@emotion/styled";
import { Stack } from "@mui/system";
import { CommentCard } from "../../cards/CommentCard";

/**
 * Styled Typography component
 * @component
 * @returns {Component} Styled Typography component
 */
const MyGamePageTypography = styled(Typography)(({ isDark }) => ({
  margin: "1rem 2rem",
  color: isDark ? "#ffffff" : "#000000",
}));

/**
 * Styled section component
 * @component
 * @returns {Component} Styled section component
 */
const MyGamePageSection = styled("section")`
  display: flex;
  flex-direction: row;
  margin: 0 2rem;
`;

/**
 * Styled image component
 * @component
 * @returns {Component} Styled image component
 */
const MyGamePageImage = styled("img")`
  width: 100%;
`;

const MyGamePageStack = styled(Stack)`
  margin: 0 3rem;
`;

const MyGamePageChip = styled(Chip)`
  margin: 1rem;
  color: #ffffff;
  background: #4057b8;
  border: none;
`;

/**
 * The game detail page
 * @component
 * @returns {Component} Game page
 */
const GamePage = () => {
  const isDark = useSelector((state) => state.darkThemeReducer.darkTheme);
  const { gameId } = useParams();
  const gameData = useFetchGameById(gameId);
  const navigate = useNavigate();

  return (
    <>
      <MyMain isDark={isDark}>
        <Grid container>
          <Grid item xs={6}>
            <MyGamePageImage
              src={gameData?.image}
              alt={gameData?.description}
            />
          </Grid>
          <Grid item xs={6}>
            <MyGamePageTypography isDark={isDark} variant="h4">
              {gameData?.name}
            </MyGamePageTypography>
            <MyGamePageTypography isDark={isDark} variant="h5">
              {gameData?.description}
            </MyGamePageTypography>
            <MyGamePageSection>
              <MyGamePageTypography isDark={isDark} variant="h6">
                Currently in stock: {gameData?.inStock}
              </MyGamePageTypography>
              <MyGamePageTypography isDark={isDark} variant="h6">
                Price: {gameData?.price}$
              </MyGamePageTypography>
            </MyGamePageSection>
            <MyGamePageStack direction="row">
              {gameData?.tags?.map((tag) => (
                <MyGamePageChip
                  label={tag}
                  onClick={() => {
                    navigate(`/tags/${tag}`);
                  }}
                />
              ))}
            </MyGamePageStack>
          </Grid>
          {gameData?.expand?.comments?.map((comment) => (
            <CommentCard commentObj={comment} />
          ))}
        </Grid>
      </MyMain>
    </>
  );
};

export default GamePage;
