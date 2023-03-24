import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { styled } from "@mui/system";

/**
 * Styled StarIcon component
 * @component
 * @returns {Component} Styled StarIcon component
 */
const MyCommentCardFullStarIcon = styled(StarIcon)`
  color: #ffd700;
`;

/**
 * Card component created for each comment object
 * @param {Object} commentObj containing all the comment info { rating, user, comment, date}
 * @returns Card for the comments
 */
export const CommentCard = ({ commentObj }) => {
  const { rating, user, comment, date } = commentObj;

  /**
   * Formats string to a date in the format Day(name), Month(short) Day(number), Year
   * @param {string} date
   * @returns formated date
   */
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  /**
   * Constant for all the stars in the ratings
   */
  const STARS = 5;
  const ratings = [];

  for (let i = 1; i <= STARS; i++) {
    ratings.push(i);
  }

  return (
    <Card style={{ margin: "1rem" }}>
      <CardContent>
        <Typography>
          {ratings.map((star) =>
            rating >= star ? <MyCommentCardFullStarIcon /> : <StarBorderIcon />
          )}
          {rating} out of 5 stars
        </Typography>
        <Typography variant="h5">
          {user} - {formatDate(date)}
        </Typography>
        <Typography variant="h6">{comment}</Typography>
      </CardContent>
    </Card>
  );
};
