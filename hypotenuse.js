const value = document.querySelectorAll(".angles");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

function calculateHypotenuse() {
  let flag = 0;
  output.style.display = "none";
  let sum = 0;
  for (let ele of value) {
    if (ele.value > 0) {
      sum += Number(ele.value) * Number(ele.value);
    } else {
      flag = 1;
      output.style.display = "block";
      output.innerText = "Values cannot be negative or zero";
    }
  }
  if (sum > 0 && flag === 0) {
    let sqrt = Math.sqrt(sum);
    output.style.display = "block";
    output.innerText = "Hypotenuse is " + sqrt.toFixed(2);
  }
}

btn.addEventListener("click", calculateHypotenuse);
