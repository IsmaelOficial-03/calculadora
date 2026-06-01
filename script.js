const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
let history = JSON.parse(localStorage.getItem("history")) || [];
history.forEach(item => {

  const li = document.createElement("li");

  li.textContent = item;

  historyList.appendChild(li);
  history.push(`${expression} = ${currentInput}`);

localStorage.setItem("history", JSON.stringify(history));

});
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach(button => {

  button.addEventListener("click", () => {

    const value = button.textContent;

    if (value === "C") {

      currentInput = "";
      display.value = "";

    } else if (value === "=") {

      try {

        const expression = currentInput;

currentInput = eval(currentInput);

display.value = currentInput;

const li = document.createElement("li");

li.textContent = `${expression} = ${currentInput}`;

historyList.appendChild(li);

      } catch {

        display.value = "Error";
        currentInput = "";

      }

    } else {

      currentInput += value;
      display.value = currentInput;

    }

  });

});

document.addEventListener("keydown", (event) => {

  const key = event.key;

  if (
    "0123456789+-*/.".includes(key)
  ) {

    currentInput += key;
    display.value = currentInput;

  }

  else if (key === "Enter") {

    try {

      currentInput = eval(currentInput);
      display.value = currentInput;

    } catch {

      display.value = "Error";
      currentInput = "";

    }

  }

  else if (key === "Backspace") {

    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;

  }

  else if (key.toLowerCase() === "c") {

    currentInput = "";
    display.value = "";

  }

});
