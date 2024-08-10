function checkAnswer(exerciseNumber, correctAnswer) {
    // Get the user's answer from the input field
    const userAnswer = document.getElementById(`exercise${exerciseNumber}`).value;

    // Get the result paragraph element
    const resultElement = document.getElementById(`result${exerciseNumber}`);

    // Check if the user's answer is correct
    if (userAnswer == correctAnswer) {
        resultElement.innerText = `Correct! The answer is ${correctAnswer}.`;
        resultElement.style.color = "green";
    } else {
        resultElement.innerText = `Incorrect. Try again!`;
        resultElement.style.color = "red";
    }
}
