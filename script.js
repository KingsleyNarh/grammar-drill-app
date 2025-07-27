const questions = [
  { question: "He ___ to school every day. ", answer: "goes" },
  { question: "They ___ eating when I arrived. ", answer: "were" },
  { question: "She has ___ her homework. ", answer: "done" },
  { question: "I ___ the movie last night. ", answer: "watched" },
  { question: "We will ___ to the market tomorrow. ", answer: "go" }
];

let currentIndex = 0;
let score = 0;

function startGame() {
  document.getElementById("welcomeScreen").classList.add("hidden");
  document.getElementById("resultScreen").classList.add("hidden");
  document.getElementById("drillContainer").classList.remove("hidden");
  currentIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const qBox = document.getElementById("questionBox");
  qBox.textContent = questions[currentIndex].question;
  document.getElementById("answerInput").value = "";
  document.getElementById("answerInput").focus();
}

function submitAnswer() {
  const input = document.getElementById("answerInput").value.trim().toLowerCase();
  const correct = questions[currentIndex].answer.toLowerCase();

  if (input === correct) {
    score++;
  }

  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    endGame();
  }
}

function endGame() {
  document.getElementById("drillContainer").classList.add("hidden");
  document.getElementById("resultScreen").classList.remove("hidden");

  let feedback;
  let badge;

  if (score === questions.length) {
    feedback = "Excellent! You got all correct!";
    badge = "🏅 Gold Badge";
  } else if (score >= Math.floor(questions.length * 0.7)) {
    feedback = "Great job! You got most correct!";
    badge = "🥈 Silver Badge";
  } else if (score >= Math.floor(questions.length * 0.4)) {
    feedback = "Good effort! Keep practicing!";
    badge = "🥉 Bronze Badge";
  } else {
    feedback = "You can do better. Try again!";
    badge = "🔰 Beginner Badge";
  }

  document.getElementById("feedbackText").textContent = feedback;
  document.getElementById("badgeEarned").textContent = badge;
}

function restartGame() {
  document.getElementById("resultScreen").classList.add("hidden");
  startGame();
}



