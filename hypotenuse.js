const value = document.querySelectorAll(".angles");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculateHypotenuse() {
  let sum = 0;
  for (let ele of value) {
    sum += Number(ele.value) * Number(ele.value);
  }
  let sqrt = Math.sqrt(sum);
  output.innerText = "Hypotenuse is " + sqrt.toFixed(2);
}

btn.addEventListener("click", calculateHypotenuse);
