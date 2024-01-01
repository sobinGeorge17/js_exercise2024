const inputField = "((3plus5minus2)dividedby2)multipliedby4"

const value = inputField.replaceAll("plus","+").replaceAll("minus","-").replaceAll("dividedby","/").replaceAll("multipliedby","*")

console.log(value);
const result =eval(value)
console.log(result);