import { shape, arrayOf, number, string } from 'prop-types';

import { PLAYER_IDS } from './players';

export const matchesPropTypes = arrayOf(
  shape({
    id: number.isRequired,
    [PLAYER_IDS.playerOne]: string.isRequired,
    [PLAYER_IDS.playerTwo]: string.isRequired,
    winner: string.isRequired,
    createdAt: string
  })
);
