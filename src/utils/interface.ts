export interface SignupArgs {
  username: string;
  email: string;
  password: string;
}

export interface LoginArgs {
  email: string;
  password: string;
}

// export interface User {
//   id?: string;
//   username?: string;
//   email?: string;
// }
export interface User extends Document {
  Id?: string;
  username?: string;
  email?: string;
  password?: string;
}
