// Demonstrate the difference between var, let and const. 

const x = 5
x =4
console.log(x)


let y = 5
y =4
console.log(y)


var z = 5
z =4
console.log(z)




console.log(a); 
var a = 10;

console.log(b); 
let b = 20;

console.log(c); 
const c = 30;




function checkScope() {
  if (true) {
    var k = "hello";
    let l = "hello";
    const m = "hello";
  }

  console.log(k);
  console.log(l);    
  console.log(m);
}
