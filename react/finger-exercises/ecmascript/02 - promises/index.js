// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const startDate = Date.now();

  return new Promise((resolve) => {
    setInterval(() => {
      resolve(Date.now() - startDate);
    }, time);
  });
}

export function asyncDelay() {

}
