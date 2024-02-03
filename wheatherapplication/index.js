// Function to determine weather condition based on temperature
 function determineWeatherCondition(temperature) {
    // Ternary operator to check if temperature is above 30°C
    const weatherCondition = temperature > 30 ? "Hot" : "Moderate";
    
    // Printing the result
    console.log(`The weather condition is ${weatherCondition}.`);
 }


const currentTemperature = parseFloat(prompt("entre the current temperature")); 
determineWeatherCondition(currentTemperature);
