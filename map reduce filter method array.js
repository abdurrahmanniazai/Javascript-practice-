let arr = [1,2,3]
console.log(arr)

//MAP method
let a = arr.map((value, index, array) =>{
  console.log(value, index, array)
  return value + 1
})
console.log(a)

//Array filter method 
let arri = [5,3,2]
a2 = arri.filter((a)=>{
  return a<3
})
console.log(a2)

let arr3 = [10,20,30]
arr3.reduce((h1, h2)=>{
  return h1 + h2
})
console.log(arr3)

