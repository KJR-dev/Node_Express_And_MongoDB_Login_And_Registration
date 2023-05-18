import mongoose from "mongoose";

const userLoginSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
});
const userLoginModel = new mongoose.model("userLogins", userLoginSchema);

export default userLoginModel;
