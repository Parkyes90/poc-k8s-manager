import checkPropTypes from 'check-prop-types';

/**
 *
 * @param wrapper
 * @param val
 */
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test="${val}"]`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.PropTypes,
    conformingProps,
    'prop',
    component.name,
    undefined
  );
  expect(propError).toBeUndefined();
};
