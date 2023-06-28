import React from "react";

interface SquareProps {
    value: string;
    onSquareClick: () => void;
    role: string;
  }
  
  function Square({ value, onSquareClick }: SquareProps) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

export default Square;