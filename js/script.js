// Getting the HTML elements reference with the help of DOM
let btnElements = document.querySelectorAll("button");
let inputEl = document.getElementById("input");

// Reusable function to display text on to the input
function displayText(text) {
  inputEl.value += text;
}

// Reusable function to clear the input field
function clearInput() {
  inputEl.value = "";
}

// This function will be triggered on click on all the buttons
function handleButtonClick(e) {
  let buttonText = e.target.innerText;
  if (buttonText === "=") {
    inputEl.value = eval(inputEl.value);
  } else if (buttonText === "C") {
    clearInput();
  } else {
    displayText(buttonText);
  }
}

// Attaching an event handler to the buttons
btnElements.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});
