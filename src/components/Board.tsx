import React from "react";
import Square from "./Square";

interface BoardProps {
  xIsNext: boolean;
  squares: string[];
  onPlay: (nextSquares: string[]) => void;
}

const Board = React.memo(({ xIsNext, squares, onPlay }: BoardProps) => {
  function handleClick(i: any) {
    try {
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
          nextSquares[i] = 'X';
        } else {
          nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
      } catch (error) {
        // Handle the error here
        console.error('An error occurred:', error);
      }
    }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <>
      <div className="status" aria-label="Game Board" aria-live="polite">{status}</div>
      <div className="board-row" tabIndex={0} role="grid">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} role="gridcell" />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} role="gridcell" />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} role="gridcell" />
      </div>
      <div className="board-row" tabIndex={0} role="grid">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} role="gridcell" />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} role="gridcell" />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} role="gridcell" />
      </div>
      <div className="board-row" tabIndex={0} role="grid">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} role="gridcell" />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} role="gridcell" />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} role="gridcell" />
      </div>
    </>
  );
});

function calculateWinner(squares: string[]): string | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default Board;