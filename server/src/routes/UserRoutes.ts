import express from 'express';
import UserController from '../controllers/UserController';
import { Schemas, ValidateSchema } from '../middlewares/Validation';

const router = express.Router();

router.get('/', UserController.getAllUsers);
router.get('/:userId',ValidateSchema(Schemas.user.userId, 'params'), UserController.getUserById);
router.put('/',ValidateSchema(Schemas.user.update, 'body'),UserController.updateUser);
router.delete('/:userId',ValidateSchema(Schemas.user.userId, 'params'),UserController.deleteUser);

export = router;

