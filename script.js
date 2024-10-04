let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);
let string = '';

buttonsArray.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML; // Store button text for clarity

    if (buttonText === 'DEL') {
      // Safely remove the last character
      string = string.slice(0, -1);
    } else if (buttonText === 'AC') {
      string = '';
    } else if (buttonText === '-' || isOperator(buttonText)) { // Handle operators
      // Don't evaluate the entire expression here, append the operator
      string += buttonText;
    } else {
      string += buttonText;
    }

    display.value = string;
  });
});

// Optional function to check if a button is an operator
function isOperator(char) {
  return char === '+' || char === '-' || char === '*' || char === '/';
}

console.log(buttons); // This will now log an array of button elements