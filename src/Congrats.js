import React from 'react';
import PropsTypes from 'prop-types';
/**
 * @function
 * @returns {JSX.Element}
 */
const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    )
  }
  return(
    <div data-test="component-congrats">
    </div>
  )
};

Congrats.propTypes = {
  success: PropsTypes.bool.isRequired
};

export default Congrats;
