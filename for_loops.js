for (let a = 5; a<10; ++a) {
  console.log(a+1)
}

let sum = 0
let n = prompt('Enter the value of n')
n = Number.parseInt(n)
for (let i=0; i <n;i++) {
  sum += (i + 1)
}
console.log("sum of first"+n+ "natural numbes is"+sum)



//Dictionary Function and for of loop
let obj = {
  harry:98, 
  ali: 100,
  hamza: 22
}
for (let a in obj) {
  console.log("marks of "+ a + "in" + obj[a])
}

//For in loops
for (let a in obj) {
  console.log("Marks of " + a + "are" + obj[a])
}

//let scope is not globe but var scope is global