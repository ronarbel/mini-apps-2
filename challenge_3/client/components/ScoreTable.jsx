import React from 'react';
import PropTypes from 'prop-types';
import Frame from './Frame.jsx';
import TotalScore from './TotalScore.jsx';
import { calculateFrameScores } from '../utils/calculateFrameScores.js';
import { createFramesData } from '../utils/createFramesData.js';

const ScoreTable = ({ throws }) => {
  // calculates single frame score based on throws
  const individualFrameScores = calculateFrameScores(throws);
  // creates array of objects, each object contains all frame data to display
  const framesData = createFramesData(throws, individualFrameScores);
  const totalScore = individualFrameScores.reduce((acc, val) => acc + val, 0);

  const frames = framesData.map(frameData => (
    <Frame frameData={frameData} key={frameData.id} />
  ));

  return (
    <div className="score-table">
      {frames}
      <TotalScore totalScore={totalScore} />
    </div>
  );
};

ScoreTable.propTypes = {
  throws: PropTypes.instanceOf(Array).isRequired,
};

export default ScoreTable;
