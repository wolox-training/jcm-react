import isArray from './utils';

export function min(...args) {
  if (args.length === 0) { return undefined; }
  const items = isArray(args[0]) ? args[0] : args;
  return Math.min(...items);
}

export function copy() {

}
