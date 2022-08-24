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
// enum color{
//     red,
//     Green,
//     blue,

// }
// let c1:color = color.Green;

//----------------------------------------------
/**
 * data type unknown
 */

// let y: unknown = 4;
// y = "Apple";
// y = false;

//----------------------------------------------
/**
 * data type object
 */

// let z:object = {name:'nimal',age:'6'}

//----------------------------------------------
/**
 * data type function
 */

// function add(x,y){
//     x + y;
// }
//anonymous function
// let myAdd = function (x , y){
//     return x + y;
// };

// let x = add(10,14);
// let y = myAdd(10,14)


//----------------------------------------------
/**
 * data type function with return type
 */

// function add(x:number, y:number): number{
//     return x + y;
// }

// // Anonymous Function
// let myAdd = function (x: number, y: number): number{
//     return x + y;
// }

//----------------------------------------------
/**
 * class and Object
 */


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

//----------------------------------------------
/**
 * class and Object this key word
 */
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

// let s2: student = new student();
// s.name= "kamal";
// s.age = 20;
// s.sayHello();

//----------------------------------------------
/**
 * class and Object - Constructor
 */

// class student {
//     public name: string;
//     public age: number;

//     constructor(name: string){
//        this.name = name;
//     }

//     public sayHello(){
//         console.log(`Hello Iam ${this.name}`);
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