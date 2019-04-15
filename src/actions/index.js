export const actionTypes = {
  CORRECT_GUESS: 'CORRECT_GUESS'
};

/**
 *
 * @returns {{type: string}}
 */
export function correctGuess() {
  return {
    type: actionTypes.CORRECT_GUESS
  }
}
