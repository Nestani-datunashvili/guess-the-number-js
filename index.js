let randomNumber = Math.floor(Math.random() * 100) + 1;

let handleInput = (event) => {
  event.preventDefault();

  let input = document.getElementById("input");
  let inputValue = document.getElementById("input").value;
  let resultDiv = document.getElementById("result");

  resultDiv.textContent = "";

  if (inputValue.trim() === "" || isNaN(inputValue)) {
    resultDiv.textContent = "Enter number please";
  } else if (inputValue > randomNumber) {
    resultDiv.textContent = "Higher";
  } else if (inputValue < randomNumber) {
    resultDiv.textContent = "lower";
  } else if (inputValue >= randomNumber) {
    resultDiv.textContent = "Good Job!! ";
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }
  input.value = "";
};
