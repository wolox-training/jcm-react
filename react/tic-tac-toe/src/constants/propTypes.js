import { shape, arrayOf, number, string } from 'prop-types';

import { PLAYER_IDS } from './players';

export const matchesPropTypes = arrayOf(
  shape({
    id: number.isRequired,
    [PLAYER_IDS.playerOne]: string,
    [PLAYER_IDS.playerTwo]: string,
    winner: string,
    createdAt: string
  })
);
