import { lines } from './constants';

const calculateWinner = (squares) => {
  const winningLine = lines.find(([a, b, c]) => squares[a] && squares[a] === squares[b] && squares[a] === squares[c]);
  return winningLine && winningLine[1];
};

export default calculateWinner;
