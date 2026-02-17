const input = document.querySelector("#inputEmail");
const textarea = document.querySelector("#textareaEmail");
const submitButton = document.querySelector("#submitBtn");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  fetch("/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: input.value,
      text: textarea.value,
    }),
  });
});
