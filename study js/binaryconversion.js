// dealing with binary system / number system

/*
& >>>> AND 
/ >>>> OR
~ >>>> NOT

*/

let num66 =15

let num77 =12

let binaryconv1 = num66.toString(2);

console.log("binaryconv",binaryconv1)

let binaryconv2 = num77.toString(2);

console.log("binaryconv",binaryconv2)



// Task

let age_1=10

let age_2=35

let age_3=65

if(age_1>age_2 && age_1>age_3){
    console.log("age_1 child discount")
}else if(age_2>age_1 && age_2>age_3){
    console.log("age_2 senior discount")
}else{
    console.log("age_3 full price")  
}
 

let score1=92

let score2 =76

let score3=58

if(score1>score2 && score1>score3){
    console.log("score1 is pass")
}else if(score2>score1 && score2>score3){
    console.log("score2 is pass")
}else{
    console.log("score3 is pass")
}