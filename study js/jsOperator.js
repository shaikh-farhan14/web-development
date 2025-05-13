/*  Arithmetic Operator  */

/*
>> Addition
>> subtraction
>> multiplication
>> Division
>> Modules (Reminder)
>> Exponentional (eg: = 2**3=8)
>> Increments
>> Decrements 

*/

// using basic maths


// let num1=1;
// let num2=2;

/*let sum = num1 ** num2

num1++
num2--

console.log(num1)
console.log(num2)*/

// Assignment Operator

/*
>>> Assign
>>> Add and Asign
>>> subtract and assign
>>> multiply and assign
>>> division and assign
>>> module and assign
*/

/*let num1 = 7;

 num1 %= 2;

 console.log(num1)*/

 //Comparison Operators

let num4 = "4";
let num5 = 5;

console.log("checking:", num4 == num5);


console.log(typeof num4);
console.log(typeof num5);



let num6 = 4;
let num7 = 5;

console.log("checking:", num6 != num7);

let flag=false;

console.log(flag!==true);

/*Task*/

// greater than

let num8 = 10;
let num9 = 11;

console.log("checking:", num8 > num9);

// less than

let num10 = 4;
let num11 = 5;

console.log("checking:", num10 < num11);

// greater than or equal

let num12 = 4;
let num13 = 5;

console.log("checking:", num12 >= num13);

//less than or equal

let num14 = 4;
let num15 = 5;

console.log("checking:", num14 <= num15); 

/*Logical Operators*/

/* 
>>>AND &&
>>>OR ||
>>>>NOT !
*/

console.log(num12 == num13-1 && num14 == num15);

console.log(num8 == num9-1 || num6 == num7);

console.log(num4 == num5-1 != num6 == num7);

/*let flags = true;

console.log("flags", !flags);*/


// string operators

/*

+ ==> concatenation
+= ==> append string

*/

let name1 ="farhan";
let name2 ="shaikh";

//let full_name = name1 + " " + name2;

name1 += " " + name2;
console.log(" name1:", name1);

//continal (terminary) operator

let age = 18;

console.log("you are eligible to vote"+ " " + (age >= 18 ? "yes" : "no"));

// spread and restoperator

let arr=[1,2,3,4,5];
let newarr =[6,7,8,9,10];

let finalArr=[...arr,...newarr];
console.log("finalArr", finalArr);


//here we have to use rest operator

const sum = (...args) =>[
    //console.log("a",a,b,c,),
    console.log("args", args),
]

sum(1,2,3)

/* bitwise operators */

//conversion into number to binary and binary to number


let number=42;

let binaryconv = number.toString(2);

console.log("binaryconv",binaryconv)

//binary to  number

let bintonum = parseInt(binaryconv,2);

console.log("bintonum", bintonum)


//conversion  number to string and string to number


let num33 = 88
console.log("num33", typeof num33)  

let newdata = num33.toString();
console.log("newdata", newdata);
console.log("newdata", typeof newdata)  

let newdata1 =string(newdata)
console.log("newdata1", newdata1)
console.log("newdata1", typeof newdata1)

let newdata2 = number(newdata1)
console.log("newdata2", newdata2)
console.log("newdata2", typeof newdata2)
