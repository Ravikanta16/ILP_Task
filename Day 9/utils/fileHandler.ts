import fs from 'fs';
import { User } from '../models/userModel';

const FILE_PATH = './users.json';

export const readUsers = (): User[] => {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (err) {
    return [];
  }
};

export const writeUsers = (users: User[]) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
};