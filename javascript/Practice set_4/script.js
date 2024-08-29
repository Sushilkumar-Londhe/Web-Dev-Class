// Write a function which takes a takes and return the uppercase of frist letter and normal remaining letters
function changeToUpperCase (string) {
let first_word = string[0];
let remaining  = string.slice(1);
return first_word.toUppercase() + remaining;
}
let capitalizeUserName = changeToUpperCase("sushil");
console.log(capitalizeUserName);
