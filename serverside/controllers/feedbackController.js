import Feedback from '../models/Feedback.js';

export const addFeedback = async (req, res) => {
  try {
    const { userName, message } = req.body;
    const newFeedback = new Feedback({ userName, message });
    await newFeedback.save();
    res.status(201).json({ msg: 'Feedback submitted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to submit feedback' });
  }
};

export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.status(200).json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch feedbacks' });
  }
};
