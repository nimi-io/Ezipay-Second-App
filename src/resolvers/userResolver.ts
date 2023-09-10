import UserModel from "../data/user";
import { User } from "../utils/interface";

export const users = async () => {
  return await UserModel.find();
};
export const user = async (_: any, email: User) => {
  return await UserModel.findOne(email);
};
