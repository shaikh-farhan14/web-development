// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//     console.log( "i",arr[i]);
// }

// Task 

// const arrr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

// for (let i = 0; i < arrr.length; i++) {
//     console.log( "i",arrr[i]);
// }


// const n = 5;
// let sum = 0;

// for (let i = 0; i <= n; i++) {
//     sum += i;
// }
// console.log("sum of first", n , "natural number is", sum);


// const rows = 5;

// for (let i = 1; i <= rows; i++) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += "*";
//     }
//     console.log(pattern);
// }

// const n= 7;
// let a = 0, b = 3;

// for (let i = 0; i <= n; i++) {
//     console.log(a);
//     let next = a + b;
//     a = b;
//     b = next;
// }


/* while loop */

// let num = 9;
// let i = 0;
// let sum = null;
// while (i < num) {
//     sum += i;
//     i++;
//     console.log("sum", sum);
// }


/* task */

// let start=1;
// let end=100;

// while(start<=end){
//     console.log(start);
//     start++;
// }

// let num=2;
// let i=0;
// let sum=10;
// while(i<=num){
//     sum+=i;
//     i++;
//     console.log("sum",sum);
// }


// let n = parseInt(process.argv[2]);
// let i1 =2;
// while(i1<=n) {
//     if(i1 % 2 ==0){
//         console.log("this is even number", i)
// }
// i1++;
// }


// let n = parseInt(process.argv[2]);
// let i1 =2;
// while(i1<=n) {
//     if(i1 % 2 ==0){
//         console.log("this is odd number", i1)
// }
// i1++;
// }


/* guess the number*/

// let guessnumber = Math.floor(match.random() *10) +1;

// let usernumber = parseInt(prompt.apply("enter the number"));

// while(guessnumber!== usernumber){
//     usernumber = parseInt(prompt("enter the number"));

// }
// console.log("this is your guessed number", guessnumber)


// let str = process.argv[2];
// let length = str.length -1;
// let index = 0;
// let reverStr ="";

// while (length >= index) {
//     reverStr += str[length];
//     length--;
// }

// console.log("reverStr",reverStr)


/*  do while loop */

let number = 7;

do{
    console.log(number);
    number++;
}while(number <6 );
