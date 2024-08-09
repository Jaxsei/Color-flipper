const colors = ["green", "red", "rgba(133, 122, 200)", "#f15025"]
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
  // get a randomnum between 0 - 3
  const randomNum = getRandomNum();
  console.log(randomNum);
  document.body.style.backgroundColor = colors[randomNum];
  color.textContent = colors[randomNum];
})

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
