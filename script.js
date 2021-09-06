const values = document.querySelectorAll(".angles");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculateSumOfAngles(nodelist) {
  return (
    Number(nodelist[0].value) +
    Number(nodelist[1].value) +
    Number(nodelist[2].value)
  );
}

function isTriangle() {
  console.log(calculateSumOfAngles(values));
  if (calculateSumOfAngles(values) == 180) {
    output.innerText = "Its a triangle!";
  } else {
    output.innerText = "its not a triangle!";
  }
}

btn.addEventListener("click", isTriangle);
