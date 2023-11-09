// Initialize game board as a 3x3 array
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let gameOver = false;

// Function to check for a winner
// Function to check for a winner
function displayWinner(winner) {
  const winnerLabel = document.getElementById('winner-label');
  winnerLabel.textContent = `Winner: ${winner}`;
  winnerLabel.style.fontSize = '2em'; // Increase font size
  winnerLabel.style.color = (winner === 'X') ? 'blue' : 'red'; // Different colors for user and computer
  setTimeout(() => {
    winnerLabel.style.fontSize = '1em'; // Reset to original size after 2 seconds
    winnerLabel.style.color = 'black';  // Reset to original color
  }, 5000);
}


function checkForTie() {
  // Flatten the board and check if there are any empty cells left
  const flatBoard = board.flat();
  if (!flatBoard.includes('') && !gameOver) {
    displayWinner('No Winner'); // Display no winner
    gameOver = true;
    return;
  }
}


function checkWinner() {
  const flatBoard = board.flat();
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
    [0, 4, 8], [2, 4, 6]  // Diagonals
  ];

  for (const [a, b, c] of winningCombinations) {
    if (flatBoard[a] && flatBoard[a] === flatBoard[b] && flatBoard[a] === flatBoard[c]) {
      displayWinner(flatBoard[a]);
      gameOver = true;
      return;
    }
  }
}



let turnLabel = document.getElementById('turn-label');
turnLabel.textContent = 'It is your turn';
// Add click event listeners to each cell
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    const cell = document.getElementById(`cell${i}${j}`);
    cell.addEventListener('click', function () {
      if (!gameOver && board[i][j] === '') {
        // User's turn
        board[i][j] = 'X';
        cell.textContent = 'X';
        cell.classList.add('bounce-in');
        checkWinner();
        checkForTie();
        // Delay computer's turn by 0.5 second
        if (!gameOver) {

          turnLabel.textContent = 'It is computer\'s turn';
          setTimeout(function () {
            let randomCell;
            do {
              const randomIndex = Math.floor(Math.random() * 9);
              const row = Math.floor(randomIndex / 3);
              const col = randomIndex % 3;
              randomCell = board[row][col];
              if (randomCell === '') {
                board[row][col] = 'O';
                const chosenCell = document.getElementById(`cell${row}${col}`);
                chosenCell.textContent = 'O';
                chosenCell.classList.add('bounce-in');
                checkWinner();
                checkForTie();
              }
            } while (randomCell !== '' && !gameOver);
            turnLabel.textContent = 'It is your turn';
          }, 500);
        }
      }
    });
  }
}

// Reset game when 'New Game' button is clicked
document.getElementById('new-game').addEventListener('click', function () {
  // Reset the board array
  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  gameOver = false;

  // Clear the table cells
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      document.getElementById(`cell${i}${j}`).textContent = '';
    }
  }
  const winnerLabel = document.getElementById('winner-label');
  winnerLabel.textContent = '';  // Clear the winner label
  resetCell.classList.remove('bounce-in');// Remove all potential animation classes
});
