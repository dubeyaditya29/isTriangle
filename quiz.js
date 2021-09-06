const form = document.querySelector(".quiz-form");
const btn = document.querySelector("#submitButton");
const score_output = document.querySelector("#score_output");

const correctAnswer = ["90", "rightangle"];

function calculateScore() {
  const formData = new FormData(form);
  let iterator = 0,
    sum = 0;
  for (let value of formData.values()) {
    if (correctAnswer[iterator] === value) {
      sum++;
    }
    iterator++;
  }
  score_output.innerText = "Your score is " + sum;
}

btn.addEventListener("click", calculateScore);
