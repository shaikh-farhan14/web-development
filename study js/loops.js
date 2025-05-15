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

const n= 7;
let a = 0, b = 3;

for (let i = 0; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}


