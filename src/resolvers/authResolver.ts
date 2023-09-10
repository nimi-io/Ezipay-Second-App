import UserModel from "../data/user";
import { SignupArgs } from "../utils/interface";

export const signup = async (_: any, args: SignupArgs) => {
  console.log(args);
  const here = await UserModel.create(args);
  console.log(here);
  return here;
};
