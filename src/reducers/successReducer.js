import { actionTypes } from "../actions";

/**
 *
 * @param state
 * @param action
 * @returns {boolean}
 */
export default (state = false, action) => {
  switch (action.type) {
    case actionTypes.CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
