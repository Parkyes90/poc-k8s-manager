import { actionTypes } from "../actions";

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default (state=[], action) => {
  switch (action.type) {
    case actionTypes.GUESS_WORD:
      return [...state, action.payload];
    default:
      return state;
  }
}
