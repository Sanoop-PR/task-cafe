import express from 'express';
import { createMenuController, updateMenuController, getMenuByTitleController, deleteMenuByIdController, getAllMenuController } from '../controllers/menuController';

const router = express.Router();

// Define routes using async controller functions
router.post('/', createMenuController);
router.get('/', getAllMenuController);
router.put('/:id', updateMenuController);
router.get('/:title', getMenuByTitleController);
router.delete('/:id', deleteMenuByIdController);

export default router;
