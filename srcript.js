function printName() {
  console.log('G')
}

function sayHello(user) {
  console.log(user)
}

function init() {
  printName()
  sayHello('Big G')
}

let colors = [];


for (let i = 0; i <= 20; i++) {
  i === 7 || i === 13? '' : console.log(i)
}

let numbers =  [1,345,5678,5234,8567,234,123,56,678,789,3645,5687,234, 123897];

let sum = 0 
numbers.forEach(i => {
 sum += i; 
})
console.log(sum)


window.onload = init