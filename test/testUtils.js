import checkPropTypes from "check-prop-types";
import { createStore } from "redux";

import rootReducer from '../src/reducers';

/**
 *
 * @param initialState
 * @returns {Store<any, Action> & *}
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
};
/**
 *
 * @param wrapper
 * @param val
 */
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name,
    undefined
  );
  expect(propError).toBeUndefined();
};
