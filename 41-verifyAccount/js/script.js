//bringing in all the inputs - put into node list
const codes = document.querySelectorAll(".code");

//automatically focuses on first input when page loads
codes[0].focus();

// creating function to automatically move focus to next input or hit Backspace to move backwards
// need setTimeout step to allow user to input value into first input
// line 13 ... .value = "" - allows user to easily enter new input if they hit backspace - will clear out the input
codes.forEach((code, idx) => {
  code.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = "";
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === "Backspace") {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
