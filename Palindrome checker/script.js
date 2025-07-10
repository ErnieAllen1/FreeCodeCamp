const checkBtn = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

const checkPalindrome = function () {
  if (textInput.value === "") {
    result.textContent = "Please input a value";

    return;
  } else {
    const inputReverse = textInput.value
      .replace(/[^A-Za-z0-9]/gi, "")
      .toLowerCase();
    inputReverse === inputReverse.split("").reverse().join("")
      ? (result.textContent = `${textInput.value} is a palindrome`)
      : (result.textContent = `${textInput.value} is not a palindrome`);
  }
};
checkBtn.addEventListener("click", checkPalindrome);
textInput.addEventListener("input", function () {
  result.textContent = "";
});
