function calculateSum(upToNumber) {
   
    let sum = 0;
    let currentNumber = 1;

    do {
        sum += currentNumber;
        currentNumber++;
    } while (currentNumber <= upToNumber);

    console.log(`The sum of numbers from 1 to ${upToNumber} is: ${sum}`);
}


const userInput = prompt("entre the number you want to the sum");
calculateSum(userInput);
