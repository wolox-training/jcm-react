import isArray from './utils';

export function min(arg) {
  return isArray(arg) ? Math.min(...arg) : arg;
}

export function copy() {

}
