import React from "react";
import styled from "styled-components";
import QualityRatingButton from "./QualityRatingButton";
import PropTypes from "prop-types";
import Flex from "./Flex";

const QualityRatingButtonStyled = styled(QualityRatingButton)`
  margin: 4px;
`;

export default function QualityRating({ rating }) {
  return (
    <Flex>
      <QualityRatingButtonStyled active={rating >= 1} />
      <QualityRatingButtonStyled active={rating >= 2} />
      <QualityRatingButtonStyled active={rating >= 3} />
      <QualityRatingButtonStyled active={rating >= 4} />
      <QualityRatingButtonStyled active={rating >= 5} />
    </Flex>
  );
}

QualityRating.propTypes = {
  rating: PropTypes.number.isRequired
};
