// var msg1 = document.getElementById("message1") 
// var msg2 = document.getElementById("message2") 
// // var msg3 = document.getElementById("message3") 
// var answer = Math.floor(Math.random() * 100) + 1;
// var no_of_guesses = 0;
// var guesses_num = [];

// function play() {
//     var user_guess = document.getElementById("textBox").value;
//     if (user_guess < 1 || user_guess > 100) {
//         alert("Please Enter a number Between 1 to 100");
//     } else {
//         guesses_num.push(user_guess);
//         no_of_guesses += 1;
//         if(no_of_guesses > 10){
//             alert("Game over");
//         }
//         else if (user_guess < answer) {
//             msg1.textContent = "GUSSED NUMBER IS LOW 😪"
//             msg2.textContent = "No. Of Guesses : " + no_of_guesses;
//             // msg3.textContent = "Guessed Number Are: " + guesses_num;
//         } else if (user_guess > answer) {
//             msg1.textContent = "GUSSED NUMBER IS BIG 😲"
//             msg2.textContent = "No. Of Guesses : " + no_of_guesses;
//             // msg3.textContent = "Guessed Number Are: " + guesses_num;
//         } else if (user_guess == answer) {
//             msg1.textContent = "CONGRATES YOU HAVE WON THE GAME 😍😍";
//             msg2.textContent = "the Number was " + answer 
//             // msg3.textContent = " You guessd it in " + no_of_guesses + "Guesses";
//         }
//     }
// }


      let randomNumber = Math.floor(Math.random() * 100) + 1;
      const guesses = document.querySelector('.guesses');
      const lastResult = document.querySelector('.lastResult');
      const lowOrHi = document.querySelector('.lowOrHi');
      const guessSubmit = document.querySelector('.guessSubmit');
      const guessField = document.querySelector('.guessField');
      let counts = document.getElementById('attemptCount');

      let guessCount = 0;
      let resetButton;
      function checkGuess() {
        let userGuess = Number(guessField.value);
        if (guessCount === 0) {
          guesses.textContent = 'Previous guesses: ';
        }
        guesses.textContent += userGuess + ' ';
        if (userGuess === randomNumber) {
          lastResult.textContent = 'Congratulations! You got it right!';
          lastResult.style.backgroundColor = 'green';
          lowOrHi.textContent = '';
          setGameOver();
        } else if (guessCount === 10) {
          lastResult.textContent = '!!!GAME OVER!!!';
          lowOrHi.textContent = '';
          setGameOver();
        } else {
          lastResult.textContent = 'Wrong!';
          lastResult.style.backgroundColor = 'red';
          if(userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!' ;
          } else if(userGuess > randomNumber) {
            lowOrHi.textContent = 'Last guess was too high!';
          }
        }
        guessCount++;
        guessField.value = '';
        guessField.focus();
        counts.textContent =guessCount;
      }
      guessSubmit.addEventListener('click', checkGuess);
      function setGameOver() {
        guessCount = 0;
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = 'Start new game';
        document.body.appendChild(resetButton);
        resetButton.addEventListener('click', resetGame);
      }
      function resetGame() {
        guessCount = 0;
        const resetParas = document.querySelectorAll('.resultParas p');
        for(let i = 0 ; i < resetParas.length ; i++) {
          resetParas[i].textContent = '';
        }
        resetButton.parentNode.removeChild(resetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = '';
        guessField.focus();
        lastResult.style.backgroundColor = 'white';
        randomNumber = Math.floor(Math.random() * 100) + 1;
      }
