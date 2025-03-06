import User from "../models/signupModel.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User is already Exist" });
    const hashPassword = await bcrypt.hash(password, 10);
    const createUser = new User({
      name: name,
      email: email,
      phone: phone,
      password: hashPassword,
    });
    await createUser.save();
    res.status(200).json({
      message: "User Registered successfully",
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
