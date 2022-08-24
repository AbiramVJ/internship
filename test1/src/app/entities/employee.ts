import {Gender} from "./gender";

export class Employee{
  includes(arg0: string): unknown {
    throw new Error('Method not implemented.');
  }
  id?: number;
  name?: string;
  age?: number;
  nic?: string;
  gender?: Gender;


}
