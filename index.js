let handleInput = (event) => {
  event.preventDefault();

  let input = document.getElementById("input");
  let inputValue = document.etElementById("input").value;
  let resultDiv = document.getElementById("result");

  resultDiv.textContent = "";

  if (inputValue.trim() === "" || isNaN(inputValue)) {
    resultDiv.textContent = "Enter number please";
  } else if (inputValue >= 10) {
    resultDiv.textContent = "make higher";
  }
  input.value = "";
};
