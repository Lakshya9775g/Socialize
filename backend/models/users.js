import mongoose, { model } from "mongoose";

const UserSchema = new mongoose.Schema({
  id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId()
  },
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  profilePic: {
    type: String,
  },
  coverPic: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  confirmPassword: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
  },
  website: {
    type: String
  }
});

export default mongoose.model('User', UserSchema);

