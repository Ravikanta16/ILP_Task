export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other"
}

export interface User {
  name: string;
  age: number;
  email: string;
  gender: Gender;
}