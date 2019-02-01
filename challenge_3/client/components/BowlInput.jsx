import React from 'react';
import NumPad from 'react-numpad';
import PropTypes from 'prop-types';

const BowlInput = ({ handleInput }) => (
  <div className="bowl-input">
    <NumPad.Number
      placeholder="Select Bowl Score"
      position="flex-start"
      onChange={value => handleInput(value)}
      decimal={false}
      negative={false}
    >
      <input type="number" />
    </NumPad.Number>
  </div>
);

BowlInput.propTypes = {
  handleInput: PropTypes.instanceOf(Function).isRequired,
};

export default BowlInput;
