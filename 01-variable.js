const accountId = 144553
let accountEmail = "Prabhanshu@google.com"
var accountPassword = "123456"
accountCity = "vidisha"
let accountstate;

//accountId = 2  // not allowed 
accountEmail = "lakshakar@gmail.com"
accountPassword = "214527"
accountCity ="bhopal"
console.log(accountId);

/* prefer not to use var 
because of issue in block scope and functional scope*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountstate])
