const base = document.querySelector("#base_value");
const height = document.querySelector("#height_value");
const btn = document.querySelector("#btn");
const out = document.querySelector("#output");

function showArea() {
  console.log("here");
  console.log(base.value);
  console.log(height.value);
  out.style.display = "none";
  if (base.value > 0 && height.value > 0) {
    let val = ((base.value * height.value) / 2).toFixed(2);
    out.style.display = "block";
    out.innerText = `Area if the traingle is ${val} sq. units`;
  } else {
    out.style.display = "block";
    out.innerText = `Please enter values greater than zero`;
  }
}
btn.addEventListener("click", showArea);
