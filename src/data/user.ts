// src/data/User.ts

import mongoose, { Document, Schema } from "mongoose";
import { User } from "../utils/interface";

const userSchema = new Schema<User>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;
