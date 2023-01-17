const changeBodyRed = ()=> {
  document.body.firstElementChild.style.background = "red"
}

let b = document.body
console.log('first element child of b is:', b.firstChild)
console.log('first element of child is:', b.firstElementChild)