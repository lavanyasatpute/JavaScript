 // stack (Primitive) , Heap (Non Primitive)
 let myFullName = "Lavanya Rajuji Satpute"
 let anothername = myFullName;
//  console.log(anothername);
// console.log(myFullName);

anothername = "Pavan Satpute"
// console.log(anothername);
// console.log(myFullName);

let userOne = {
    email:"lavanya@gmail.com",
    upi:"user@sbi"
};

let userTwo = userOne
console.log(userTwo);
userTwo.email = "pavan@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);


