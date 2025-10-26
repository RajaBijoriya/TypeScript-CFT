// 1. Declare a variable age of type number and assign it a value.
// let age: number = 20;
// console.log(age)


// 2. Create a variable that can hold either a string or a number.

// let val: number | string = "hello";
// console.log(val)

//  3. Define a tuple with a string and a boolean.
// let arr : (string | boolean)[] = ["hello", true, "how are you", false];
// console.log(arr)


//  4. Write an enum Role with values Admin , User , Guest .

// enum Role {
//     Admin, 
//     User, 
//     Guest
// }

// console.log(Role.Admin)
// console.log(Role.User)
// console.log(Role.Guest)


//  5. Create a type alias ID that can be either string or number.

// type ID = number | string;
// let userId : ID = "raja"
// let postId : ID = 3242;
// console.log(userId, postId)


//  6. Write a function add that takes two numbers and returns their sum.
// const Sum = (a : number, b : number) : number => {
//     return a+b;
// }
// console.log(Sum(2, 4))


//  7. Write a function printName that accepts an object with firstName and
//  optional lastName .


// const printName = (obj: any) => {
//     console.log(obj.firstName);
// }
// printName({
//   firstName: "raja",
//   lastName: "bijoriya",
// });

// type Person = {
//     firstName: string;
//     lastName?: string; // this is optional property
// };

// const printName = (obj: Person): void => {
//     if(obj.lastName) console.log(`${obj.firstName} ${obj.lastName}`);
//     else console.log(obj.firstName);
// };

// const first: Person = {firstName: "Raja", lastName: "king"};
// const second: Person = {firstName: "Hello"};

// printName(first);
// printName(second);



//  8. Write a function that accepts an array of numbers and returns the
//  largest number.

// const arr :  number[] = [1,2,5,6,7];
// const findMax = (arr : number[]): number => {
//     let maxVal = arr[0];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > maxVal) maxVal = arr[i];
//     }
//     return maxVal;
// }

// const val = findMax(arr);
// console.log(val)






//  9. Define an interface Person with name: string and age: number .
//  Create one object from it.
// interface Person  {
//    name: string,
//    age: number,
// }

// const obj : Person = {
//    name: "Raja",
//    age: 22,
// }
// console.log(obj)


//  10. Create a readonly property id in a User interface

// interface User {
//    readonly id : number,
// }

// const obj : User = {
//     id: 33
// }
// console.log(obj)




//  11. Define a function type alias MathOp that takes two numbers and
//  returns a number. Implement multiply using it.

// type  MathOp = number;

// const Product = (a : MathOp, b : MathOp) : MathOp => {
//       return a * b;
// }

// console.log(Product(3, 4))


// type MathOp = (a: number, b: number) => number;

// const multiply: MathOp = (a, b) => {
//     return a * b;
// }

// console.log(multiply(3, 4))

// type Val =  number | string;

// const CheckType = (a : Val) => {
//     console.log(typeof a)
// }

// CheckType("king")


//  13. Create a literal type for directions: "north" | "south" | "east" |
//  "west" .

// type directions=  "north" | "south" | "east" | "west";

// let move : directions;
// move = "north"
// move = "south"
// move = "ip"









// 14. Write a function isEven that returns true if a number is even.
// const isEven = (num : number): boolean => {
//     if(num % 2 == 0) return true;
//     else return false;
// }
// console.log(isEven(4))


// 15. Write a function reverseString that reverses a given string.

// const reverseString = (str : string) : string => {
//     let val = "";
//     for(let i=str.length-1; i>=0; i--){
//         val = val+str[i];
//     }
//     return val;
// }

// console.log(reverseString("raja"))


// 16. Write a function filterOdd that removes odd numbers from an array.


// let arr : number[] = [1, 5, 3, 2, 4, 9]; 
// const filterOdd = (arr : number[]) : number[] => {
//     let val = arr.filter((num) => num%2 == 0);
//     return val;
// }

// console.log(filterOdd(arr))


// 17. Define a tuple type for [id: number, name: string, isActive:
//  boolean] and create one instance.

// type UserTuple = [id: number, name: string, isActive: boolean];
// // creating one instance of the tuple
// const user1 : UserTuple = [122, "raja", true]
// console.log(user1[0])
// console.log(user1[1])
// console.log(user1[2])


//  18. Write a function that returns "positive" , "negative" , or "zero" for a
//  number input.

// const checkNum = (num : number): string => {
//     if(num === 0) return "zero";
//     else if(num < 0) return "negative";
//     return "positive";
// }
// console.log(checkNum(-1))




//  19. Write a function that takes an array of strings and returns them in
//  uppercase.

// let str : string[] = ["one", "two", "three", "four"];

// const Capital = (str : string[]): string[] => {
//     let cap : string[] = [];
//     for(let i=0; i<str.length; i++){
//         let val : string = "";
//         for(let j=0; j<str[i].length; j++){
//            if(j===0){
//             let a : string = str[i][j].toUpperCase();
//              val = val + a;
//            }
//            else val = val + str[i][j];
//         }

//         cap.push(val);
//     }
//     return cap;

// }

// console.log(Capital(str))







// Example: Function with never Parameter
// // 20. Write a function that accepts a parameter of type never

// function handleNever(value: never): never {
//   throw new Error("This function should never be called");
// }


// ✅ Here:

// The function handleNever accepts a parameter of type never.

// That means no possible value can be passed to it.

// If somehow it’s called, it throws an error and never returns.

// ⚙️ Example Usage — Exhaustive Checking

// The most common real-world use of never is when you want to make sure all cases in a union are handled.

// type Direction = "north" | "south" | "east" | "west";

// function move(direction: Direction) {
//   switch (direction) {
//     case "north":
//       console.log("Going North");
//       break;
//     case "south":
//       console.log("Going South");
//       break;
//     case "east":
//       console.log("Going East");
//       break;
//     case "west":
//       console.log("Going West");
//       break;
//     default:
//       // If a new direction is added later, TypeScript will catch it here
//       const _exhaustiveCheck: never = direction;
//       handleNever(_exhaustiveCheck);
//   }
// }


// ✅ Explanation:

// The default case ensures that all possible direction values are covered.

// If you later add something like "up" to Direction and forget to handle it,
// TypeScript will show a compile-time error.

// 🧠 Summary:
// Concept	Description
// never type	Represents a value that never occurs
// Used for	Functions that never return (like throw, infinite loops) or for exhaustive type checks
// Example	function fail(msg: string): never { throw new Error(msg); }