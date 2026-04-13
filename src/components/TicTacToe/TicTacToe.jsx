import React, { useState } from 'react'
import './TicTacToe.css'

const initialState = Array(9).fill(null)

const TicTacToe = () => {
  const [board, setBoard] = useState(initialState)
  const [isX, setIsX] = useState(true);

  function calculateWinner() {
    const winnerList = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let index = 0; index < winnerList.length; index++) {
      const [a, b, c] = winnerList[index];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }
  const winner = calculateWinner();

  function handleClick(index) {
    if (winner || board[index] != null) return
    setBoard((prev) => {
      const _prev = [...prev];
      _prev[index] = isX ? "X" : "O";
      return _prev
    })
    setIsX(prev => !prev)
  }

  function resetGame() {
    setBoard(initialState);
    setIsX(true)
  }

  return (
    <div className='tic-tac-toe'>
      <h2>TicTacToe</h2>
      <p>{winner? `Winner is: ${winner}` : !board.includes(null) ? "Match Draw" :  `Next Turn: ${isX ? 'X' : 'O'}`}</p>
      <button onClick={resetGame}>Reset</button>
      <div className='board-container'>
        {board.map((square, index) => (
          <button key={index} className='square' onClick={() => handleClick(index)}>{square}</button>
        ))}
      </div>
    </div>
  )
}

export default TicTacToe