import React from 'react';
import PropTypes from 'prop-types';

const TotalScore = ({ totalScore }) => (
  <div className="total-score">
    <span>Total Score: </span>
    {totalScore}
  </div>
);

TotalScore.propTypes = {
  totalScore: PropTypes.instanceOf(Number).isRequired,
};

export default TotalScore;
