const questions = [
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Paris", "Madrid", "Rome"],
            correctAnswer: 1,
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Venus", "Mars", "Jupiter", "Saturn"],
            correctAnswer: 1,
        },
        {
            question: "What is the chemical symbol for water?",
            choices: ["H2O", "CO2", "O2", "N2"],
            correctAnswer: 0,
        },
        // Add more questions here
    ];
let currentQuestion = 0;
let score = 0;
const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const scoreElement = document.getElementById("score");
  
function displayQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    choicesElement.innerHTML = "";
    question.choices.forEach((choice, index) => {
    const choiceElement = document.createElement("div");
    choiceElement.className = "choice";
    choiceElement.textContent = choice;
    choiceElement.addEventListener("click", () => checkAnswer(index));
    choicesElement.appendChild(choiceElement);
    });
}

function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    if (question.correctAnswer === selectedIndex) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    questionElement.textContent = "Quiz Completed!";
    choicesElement.innerHTML = "";
    scoreElement.textContent = "Your Score: " + score + "/" + questions.length;
}
document.getElementById("nextButton").addEventListener("click", () => {
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
});

displayQuestion();
