// Hint: use setInterval, create a new Promise and measure time with Date.now()

import TIME from './test';

export function delay(time) {
  const startDate = Date.now();

  return new Promise((resolve, reject) => {
    if (time >= TIME * TIME) {
      reject(new Error('This time is too much !'));
    }

    setInterval(() => {
      resolve(Date.now() - startDate);
    }, time);
  });
}

export async function asyncDelay(time) {
  const startDate = Date.now();
  const diff = await new Promise(resolve => {
    setInterval(() => resolve(Date.now() - startDate), time);
  });
  
  return diff;
}
