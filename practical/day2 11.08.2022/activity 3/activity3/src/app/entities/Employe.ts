export class Employee{
  id: number;
  name: string;
  birthday:string;
  nic:string;
  gender:string;

  constructor(id:number,name:string,birthday:string,nic:string,gender:string){
   this.id = id;
  this.name = name;
  this.birthday = birthday;
  this.nic = nic;
  this.gender = gender;
  }
}
