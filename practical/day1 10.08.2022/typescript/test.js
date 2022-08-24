// const message: string = 'hello world';
// console.log(message);
//----------------------------------------------
/**
 * data type ANY
 */
// let message: any = "hello world";
// message = true;
// message = 123;
// console.log(message);
//----------------------------------------------
/**
 * data type Boolean and number
 */
// let x: boolean = true;
// console.log(x);
// let a:number = 96;
// let b:number = 0x00A0;
// let c:number = 0b1010;
// let d:number = 0o744;
//----------------------------------------------
/**
 * data type Boolean and number
 */
// let color1:string = "blue";
// let color2:string = "red";
//template string
// let fname:string = 'Nimal';
// let lname:string = 'perera';
// let text:string = `My name is ${fname} ${lname}`;
//----------------------------------------------
/**
 * data type array
 */
// let arr1:number[]=[1,2,3];
// let arr2:Array<number> = [1,2,3];
// tuple
//let t1:[string,number] = ["Apple",10];


//----------------------------------------------
/**
 * data type enum
 */
// var color;
// (function (color) {
//     color[color["red"] = 0] = "red";
//     color[color["Green"] = 1] = "Green";
//     color[color["blue"] = 2] = "blue";
// })(color || (color = {}));
// var c1 = color.Green;

//----------------------------------------------
/**
 * data type enum
 */


// const color1: string = "Blue";
// let color: string = "Red";
// console.log(color1);
// let a: number = 6;
// let b: number = 0x00A0;
// let ar1: number[]= [1,2,3];
// let ar2: Array<number> = [1,2,3];
// enum color{
//     Red,
//     Green,
//     Blue,
// }
// let c1: color = color.Green;
// let y: unknown = 4;
// y = "Apple";
// y = false;
// class student {
//     public name: string;
//     public age: number;
//     public sayHello(){
//         console.log("hello world");
//     }
// }
// let s: student = new student();
// s.name= "kamal";
// s.age = 20;
// s.sayHello();
// activity
// class Rectangle{
//     private width:number;
//     private height:number;
//     constructor(width: number, height:number){
//         this.width = width;
//         this.height = height;
//     }
//     public getArea() : number {
//         return this.width * this.height;
//     }
//     public getPeremeter():number{
//         return 2 * (this.width+this.height);
//     }
// }
// let r1: Rectangle = new Rectangle(10,20);
// console.log(r1.getArea());
