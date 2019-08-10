import { DATA } from '@constants/data';

export default {
  getBooks: () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve({ ok: true, data: DATA });
      }, 2000);
    })
};
