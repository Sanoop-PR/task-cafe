import express from 'express';
import { createItemController, getAllItemByMenuController, deleteItemByIdController,getItemByIdController,updateItemController } from '../controllers/itemController';

const router = express.Router();

router.get('/:title', getAllItemByMenuController);
router.put('/:id', updateItemController);
router.post('/', createItemController);
router.delete('/:id', deleteItemByIdController);
router.get('/one/:id', getItemByIdController);

export default router;
