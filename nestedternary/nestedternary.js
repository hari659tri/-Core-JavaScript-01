const number = parseInt(prompt("Enter a number:"));

const result = 
  number > 0 ? "Positive" :
  number < 0 ? "Negative" :
  number === 0 ? "Zero" :
  "Invalid Input";

console.log(result);
