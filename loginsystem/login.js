function login(username, password) {
    const correctUsername = "admin";
    const correctPassword = "12345";

    // Check if the provided username and password are correct
    if (username === correctUsername && password === correctPassword) {
        return "Login Successful";
    } else {
        return "Invalid Credentials";
    }
}

// Example usage:
const enteredUsername = prompt("Enter your username:");
const enteredPassword = prompt("Enter your password:");
const loginResult = login(enteredUsername, enteredPassword);
console.log(loginResult);
