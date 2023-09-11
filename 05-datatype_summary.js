//Primitive

// 7 type :- string, Number,booolen, null(empty), undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber =  2352255845666667n



//Refereence (non primitive)

//Array, objects , Functions

const heros = ["shaktiman", "naagraj","doga"]

let myObj =
{
    name: "prabhanshu",
    age:22,
}
const myFunction = function(){
    console.log("hello world");

}
console.log(typeof outsideTemp);

//========================//

// Stack(Primitive),heap (Non-Primitive)

let myYoutubename = "designhux"

let anothername = myYoutubename
anothername = "dhx"
console.log(myYoutubename)
console.log(anothername)

let userOne= {
    email: "usergoogle.com",
    upi: " user@ybl"

}

let userTwo = userOne

userTwo.email = "prabhanshu@google.com"

console.log(userOne.email);
console.log(userTwo.email);

