//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  const textInput = document.getElementById("text");
  const delayInput = document.getElementById("delay");
  const submitBtn = document.getElementById("btn");
  const outputDiv = document.getElementById("output");

  submitBtn.addEventListener("click", async () => {
    const text = textInput.value;
    const delay = parseInt(delayInput.value);

    if (!text || isNaN(delay)) {
      outputDiv.textContent = "Please enter valid text and delay values.";
      return;
    }

    // Clear the output div
    outputDiv.textContent = "";

    // Utilize async/await to introduce a delay
    await new Promise(resolve => setTimeout(resolve, delay));

    // Display the text after the specified delay
    outputDiv.textContent = text;
  });
});
