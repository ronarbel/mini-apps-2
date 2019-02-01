import React from 'react';
import PropTypes from 'prop-types';

const Frame = ({ frameData }) => {
  const { throw1, throw2, frameScoreDisplayTotal } = frameData;
  return (
    <div className="frame">
      <div className="throw-1">{throw1}</div>
      <div className="throw-2">{throw2}</div>
      <div className="frame-score">{frameScoreDisplayTotal}</div>
    </div>
  );
};

Frame.propTypes = {
  frameData: PropTypes.instanceOf(Object).isRequired,
};

export default Frame;
