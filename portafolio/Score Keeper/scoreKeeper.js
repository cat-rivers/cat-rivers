const p1 = {
  button: document.querySelector("#btnPly1"),
  score: 0,
  display: document.querySelector("#p1Display"),
};
const p2 = {
  button: document.querySelector("#btnPly2"),
  score: 0,
  display: document.querySelector("#p2Display"),
};

const resetBtn = document.querySelector("#resetBtn");
const winningScoreSelect = document.querySelector("#playTo");
let winningScore = 3;
let isGameOver = false;

// try function
function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
});

winningScoreSelect.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  reset();
});

resetBtn.addEventListener("click", reset);

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove("has-text-danger", "has-text-success");
    p.button.disabled = false;
  }
}
