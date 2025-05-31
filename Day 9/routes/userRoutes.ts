import { Router } from 'express';
import {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  deleteUser
} from '../controllers/userController';

const router = Router();

router.post('/users', createUser);
router.get('/users/:email', getUser);
router.get('/users', getAllUsers);
router.put('/users/:email', updateUser);
router.delete('/users/:email', deleteUser);

export default router;