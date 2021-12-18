// console.log("Hello");

const choice = document.querySelectorAll(".choice");
const result = document.querySelector(".result");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");

const rps = ["r", "p", "s"];

console.log(userScore.value);
// const winCombos = [
//   ["r", "s"],
//   ["s", "p"],
//   ["p", "r"],
// ];

choice.forEach((ele) => {
  ele.addEventListener("click", gameStart);
});

userScore.value = 0;
compScore.value = 0;

function gameStart(element) {
  const compMove = rps[Math.trunc(Math.random() * 3)];
  console.log(compMove);
  const userMove = element.currentTarget.id;
  if (userMove == "r" && compMove == "p") {
    result.innerText = `Paper covers rock. You lose.`;
    compScore.value += 1;
    compScore.innerText = compScore.value;
  } else if (userMove == "r" && compMove == "s") {
    result.innerText = `Rock destroys scissor. You Win.`;
    userScore.value += 1;
    userScore.innerText = userScore.value;
  } else if (userMove == "p" && compMove == "s") {
    result.innerText = `Scissor cuts paper. You lose.`;
    compScore.value += 1;
    compScore.innerText = compScore.value;
  } else if (userMove == "p" && compMove == "r") {
    result.innerText = `Paper covers rock. You Win.`;
    userScore.value += 1;
    userScore.innerText = userScore.value;
  } else if (userMove == "s" && compMove == "r") {
    result.innerText = `Rock destroys scissor. You Lose.`;
    compScore.value += 1;
    compScore.innerText = compScore.value;
  } else if (userMove == "s" && compMove == "p") {
    result.innerText = `Scissor cuts paper. You Win.`;
    userScore.value += 1;
    userScore.innerText = userScore.value;
  } else {
    result.innerText = `DRAW!!!!!!!`;
  }
}
