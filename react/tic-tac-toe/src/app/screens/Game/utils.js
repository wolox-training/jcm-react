import { lines } from './constants';

const calculateWinner = (squares) => {
  lines.forEach(element => {
    const [a, b, c] = element;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }

    return null;
  });
};

export default calculateWinner;
