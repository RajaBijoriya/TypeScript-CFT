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

