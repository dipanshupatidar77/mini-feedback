import express from 'express';
import { addFeedback, getAllFeedbacks } from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/feedback', addFeedback);
router.get('/feedbacks', getAllFeedbacks);

export default router;
