import type { NextApiRequest, NextApiResponse } from 'next'
import { Playlist } from '../../../entities/playlist';
import { User } from '../../../entities/user';

// Fake users data
export const dataBase = {
  users: [
    new User(
      Math.random().toString(36).slice(2, 7),
      new Playlist([], 'My Playlist'),
      'Alexis',
      'https://i.pravatar.cc/',
      'Developer at Brazil'
    )
  ]
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database

  res.status(200).json(dataBase.users)
}