 const score = JSON.parse(localStorage.getItem('score')) || {
        wins: 0,
        losses: 0,
        ties: 0
      };
      updateScore();
      
      function updateScore() {document.querySelector('.js-score').innerHTML=
      
`wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;

      }

      function playGame(playerMove) {
        const button = document.querySelector(`button[onclick="playGame('${playerMove}');"]`);
button.classList.add('glow');
setTimeout(() => {
  button.classList.remove('glow');
}, 500);
        const computerMove = pickComputerMove();
        let result = '';

        if (playerMove === 'scissors') {
          result = computerMove === 'rock' ? 'You lose.' :
                   computerMove === 'paper' ? 'You win.' : 'Tie.';
        } else if (playerMove === 'paper') {
          result = computerMove === 'rock' ? 'You win.' :
                   computerMove === 'paper' ? 'Tie.' : 'You lose.';
        } else if (playerMove === 'rock') {
          result = computerMove === 'rock' ? 'Tie.' :
                   computerMove === 'paper' ? 'You lose.' : 'You win.';
        }
        

        if (result === 'You win.') score.wins++;
        else if (result === 'You lose.') score.losses++;
        else score.ties++;
        localStorage.setItem('score', JSON.stringify(score));

        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML =` You
      <img src="${playerMove}.png" class="move-icon">
      Computer
      <img src="${computerMove}.png" class="move-icon">`;


        
        document.querySelector('.js-score').innerHTML=
`wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;     
      }

      function pickComputerMove() {
        const randomNumber = Math.random();
        return randomNumber < 1 / 3 ? 'rock'
             : randomNumber < 2 / 3 ? 'paper'
             : 'scissors';
      }