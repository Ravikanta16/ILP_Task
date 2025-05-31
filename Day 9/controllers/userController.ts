import {Request, Response } from 'express';
import {User} from '../models/userModel';
import { readUsers, writeUsers } from '../utils/fileHandler';

export const createUser = (req: Request, res: Response): any => {
  const newUser: User = req.body;
  const users = readUsers();

  if (users.find(user => user.email === newUser.email)) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  users.push(newUser);
  writeUsers(users);
  return res.status(201).json({ message: 'User created', user: newUser });
};

export const getUser = (req: Request, res: Response):any => {
  const { email } = req.params;
  const users = readUsers();
  const user = users.find(u => u.email === email);

  if (!user) return res.status(404).json({ message: 'User not found' });
  return res.json(user);
};

export const getAllUsers = (_req: Request, res: Response): any => {
  const users = readUsers();
  return res.json(users);
};

export const updateUser = (req: Request, res: Response):any => {
  const { email } = req.params;
  const updateData: Partial<User> = req.body;
  const users = readUsers();

  const index = users.findIndex(u => u.email === email);
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  users[index] = { ...users[index], ...updateData };
  writeUsers(users);
  return res.json({ message: 'User updated', user: users[index] });
};

export const deleteUser = (req: Request, res: Response):any => {
  const { email } = req.params;
  let users = readUsers();

  const index = users.findIndex(u => u.email === email);
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  const deletedUser = users.splice(index, 1);
  writeUsers(users);
  return res.json({ message: 'User deleted', user: deletedUser[0] });
};
