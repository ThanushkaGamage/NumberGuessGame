let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 3;
let guessedNumbers = [];

function play() {
    let guess = parseInt(document.getElementById("guess").value);
    guessedNumbers.push(guess);

    if (guess == secretNumber) {
        document.getElementById("message3").textContent = `Congratulations! You are right. The secret number was ${secretNumber}.`;
    } else {
        attempts--;
        document.getElementById("message1").textContent = `Number of Guesses: ${guessedNumbers.length}`;
        document.getElementById("message2").textContent = `Guessed numbers are: ${guessedNumbers.join(", ")}`;

        if (attempts == 0) {
            document.getElementById("message3").textContent = `Game over! The secret number was ${secretNumber}.`;
        } else {
            let hint = guess < secretNumber ? "higher" : "lower";
            document.getElementById("message3").textContent = `Try again! Go for a ${hint} number. You have ${attempts} chances left.`;
        }
    }
}