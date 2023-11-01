// Initialize game board as a 3x3 array
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  
  let gameOver = false;
  
  // Function to check for a winner
  // Function to check for a winner
    function checkWinner() {
        const flatBoard = board.flat();
        
        // Define the winning combinations
        const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Columns
        [0, 4, 8], [2, 4, 6]  // Diagonals
        ];
        
        const winnerLabel = document.getElementById('winner-label');
    
        for (const [a, b, c] of winningCombinations) {
        if (flatBoard[a] && flatBoard[a] === flatBoard[b] && flatBoard[a] === flatBoard[c]) {
            winnerLabel.textContent = `Winner: ${flatBoard[a]}`;
            gameOver = true;
            return;
        }
        }
    }

  // Add click event listeners to each cell
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const cell = document.getElementById(`cell${i}${j}`);
      cell.addEventListener('click', function() {
        if (!gameOver && board[i][j] === '') {
          // User's turn
          board[i][j] = 'X';
          cell.textContent = 'X';
          checkWinner();
  
          // Delay computer's turn by 1 second
          if (!gameOver) {
            setTimeout(function() {
              let randomCell;
              do {
                const randomIndex = Math.floor(Math.random() * 9);
                const row = Math.floor(randomIndex / 3);
                const col = randomIndex % 3;
                randomCell = board[row][col];
                if (randomCell === '') {
                  board[row][col] = 'O';
                  document.getElementById(`cell${row}${col}`).textContent = 'O';
                  checkWinner();
                }
              } while (randomCell !== '' && !gameOver);
            }, 500);
          }
        }
      });
    }
  }
  
  // Reset game when 'New Game' button is clicked
  document.getElementById('new-game').addEventListener('click', function() {
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
  });
  