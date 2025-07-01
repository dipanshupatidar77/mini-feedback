import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  userName: String,
  message: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Feedback', feedbackSchema);
