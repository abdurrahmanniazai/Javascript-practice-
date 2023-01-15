let str = "Ali"
//console.log(str.length)
console.log(str[0])

//---------------------
let car1 = "Toyota"
let car3 = "Honda"

//Template literals  ${car1}
let sentence = `${car1} is not car3`
console.log(sentence)
//----------------------

let name = "Ali is here"

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2, 4))
console.log(name.slice(2))
console.log(name.replace('Ali', 'who'))
//-------------------------

console.log('ali\**'.length)
//-------------------
//includes, startwith and endwith functions
const senance = 'The quick brown fox is not here'
const word = 'fox';
console.log(`The word "${word}" ${senance.includes(word) ? 'is' : 'is not'} in the list`)
//--------------------

try3 = 'who is'
console.log(try3.toLowerCase())

//---------------------
// A program that returns 1000 amount 
let try4 = "please provide me Rs 1000"
let amount = Number.parseInt(try4.slice("please provide me".length))
console.log(amount)
//--------------------------

//strings are immutable
let friend = "Ali"
friend[3] = "R"
console.log(friend)  //will not change as strings are immutable
