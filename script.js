const inputBox = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");
let string = "";

buttons = Array.from(buttons);


buttons.forEach((button) => {

  button.addEventListener("click", (e) => {
    let buttonText = e.target.innerText;
    if (buttonText === "=") {
      string = eval(string);
      inputBox.value = string;
    } else if (buttonText === "AC") {
      string = "";
      inputBox.value = string;
    } else if (buttonText === "C") {
      string = string.substring(0, string.length - 1);
      inputBox.value = string;
    } else {
      string += buttonText;
      inputBox.value = string;
    }
  });

});


