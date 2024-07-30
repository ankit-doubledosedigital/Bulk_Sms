import express from 'express';
import messageController from '../controller/messageController';

const router = express.Router();

router.post('/send', messageController.createMessage);
router.get('/', messageController.getMessages);

export default router;
