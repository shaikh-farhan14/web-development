
// this promises 

//? promise took callBack Function and also took (resolve,reject)

// $    ()=>{} // callback function
// let ice_cream = new Promise((res, rej) => {
//   let got_ice_cream = false;
//   if (got_ice_cream) res(got_ice_cream);
//   else rej(got_ice_cream);
// }); 

// ice_cream
//   .then(() => {
//     console.log('eat ice cream');
//   })
//   .catch(() => {
//     console.log('call mommy');
//   }); 

// what if we get delay to get the response

console.log('A')

let ice_cream = new Promise((res, rej) => {
  let got_ice_cream;

  console.log('B')

  setTimeout(() => {
    got_ice_cream = true;
    if (got_ice_cream) {
      res('eat ice cream');
    } else {
      rej('call mom');
    }
  }, 1000);
}); 

console.log('C')

// here i created new promise

console.log('D')

ice_cream
  .then(() => {
    console.log('eat ice cream');
  })
  .catch(() => {
    console.log('call mommy');
  });

console.log('E')

