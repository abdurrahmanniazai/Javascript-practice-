//Conditional expressions practiced

let a = prompt('your age please?');
a = Number.parseInt(a); 

if (a<0){
  alert('This is an invalid age');
}
else if(a<9){
  alert('you are a kid');
}
else if(a<18 && a>= 9) {
  alert("you are a kid too");
}
else{
  alert("this is an invalid age");
}
console.log("done")
console.log("you can", (age<18? "not drive": "drive" ))
