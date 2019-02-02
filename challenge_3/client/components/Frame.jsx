import React from 'react';
import PropTypes from 'prop-types';

const Frame = ({ frameData }) => {
  const { throw1, throw2, frameCumulativeScore } = frameData;
  return (
    <div className="frame">
      <span className="throw-1">{throw1}</span>
      <span className="throw-2">{throw2}</span>
      <div className="frame-score">{frameCumulativeScore}</div>
    </div>
  );
};

Frame.propTypes = {
  frameData: PropTypes.instanceOf(Object).isRequired,
};

export default Frame;
