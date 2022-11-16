import type { NextApiRequest, NextApiResponse } from 'next'
import { Playlist } from '../../../entities/Playlist';
import { User } from '../../../entities/User';

// Fake users data
export const dataBase = {
  users: [
    new User(
      Math.random().toString(36).slice(2, 7),
      new Playlist([], 'My Playlist'),
      'Alexa',
      'https://i.pravatar.cc/?img=30',
      'AI Engineer',
    ),
    new User(
      Math.random().toString(36).slice(2, 7),
      new Playlist([], 'My Playlist'),
      'Peter Quill',
      'https://i.pravatar.cc/',
      'Star lord'
    )
  ]
};

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database

  res.status(200).json(dataBase.users)
}