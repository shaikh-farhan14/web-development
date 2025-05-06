  
//Hosting

console.log(name)

var name="farhan"

console.log(name); 'farhan'




var number;

number="5"

console.log(number);


//Variable leakage in var key word

var another_value="topic"

for(var i=0;i<5;i++){
    console.log(another_value)
    console.log(i)
}

console.log(i)


//leakage handle by let key word

let another_value2="topics";

for(let f=0;f<6;f++){
    console.log(another_value2)
    console.log(f)
}
/* console.log(f) */



/* data types*/

 //Data types in js-classify the different kinds of value that variable can hold

 //primitive data types {immutable}
/* String
number
Boolean
null
undefined
BigInt
Symbol */

//non primitive datat type {mutable}
/* Object
Array */


//primitive data types {immutable}
let naam="zoro";

console.log(naam)

naam ="luffy"

console.log(naam)


//non primitive datat type {mutable}
let data=["farhan","nishad","hetuk","khushi"];

data[2]="siraj";

console.log(data);

//const key word

