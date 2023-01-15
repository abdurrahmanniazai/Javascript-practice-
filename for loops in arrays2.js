let a = [1,2,3,4]

//this is older style of for loop code
for (let i=0; i<a.length; i++){
  console.log(a[i])
}

//ForEach Loop
a.forEach((element) => {
  console.log(element * element)
})

//Array.from
let name = "Harry"
let arr = Array.from(name)
console.log(arr)

// for-of loop
for (let i of a) {
  console.log(i)
}

//for in looop
for (let i in a) {
  console.log(a[i])
}

// ***arrays have keys. if not declared they exist with every array from 0,1,2 to onwards