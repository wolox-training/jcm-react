import isArray from './utils';

// eslint-disable-next-line consistent-return
export function min(...args) {
  if (args.length) {
    const items = isArray(args[0]) ? args[0] : args;
    return Math.min(...items);
  }
}

export const copy = (object) => (isArray(object) ? [...object] : { ...object });

export const reverseMerge = (first, second) => [...second, ...first];

export const filterAttribs = ({ a, b, ...attrs }) => attrs;
