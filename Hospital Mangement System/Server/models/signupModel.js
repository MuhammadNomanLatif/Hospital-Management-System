import mongoose, { model } from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 16,
  },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});
const User = mongoose.model("User", userSchema);
export default User;
