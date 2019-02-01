import React from 'react';
import Frame from './Frame.jsx';
import PropTypes from 'prop-types';
import TotalScore from './TotalScore.jsx';

const ScoreTable = ({ throws }) => {
  let totalScore = 0;
  const frames = throws.map((value, i) => {

  })
  return (
    <div className="score-table">
      <Frame />
      <TotalScore totalScore={totalScore} />
    </div>
  );
};

ScoreTable.propTypes = {
  throws: PropTypes.instanceOf(Array).isRequired,
};

export default ScoreTable;
