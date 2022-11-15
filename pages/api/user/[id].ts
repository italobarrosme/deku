import type { NextApiRequest, NextApiResponse } from 'next'
import { dataBase } from './users';

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id, name },
    method,
    body
  } = req
  

  switch (method) {
    case 'GET':
      // Get data from your database
      const user = dataBase.users.find(user => user.id === id);
      
      res.status(200).json(user)
      break
    case 'PUT':
      // Update or create data in your database
      const updateUser = dataBase.users.find(user => user.id === id);

      if (updateUser) {
        updateUser.updateUser(body.name, body.picture, body.description);

        res.status(200).json(updateUser)
      } else {
        res.status(400).json({ message: 'User not found' })
      }
      
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}