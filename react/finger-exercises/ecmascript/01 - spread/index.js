import isArray from './utils';

export function min(...args) {
  const items = isArray(args[0]) ? args[0] : args;
  return Math.min(...items);
}

export function copy() {

}
